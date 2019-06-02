import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import Badge from "@material-ui/core/es/Badge/Badge";
import SwipeableViews from "react-swipeable-views";
import Typography from "@material-ui/core/es/Typography/Typography";
import SingleBoardView from "./SingleBoardView.jsx";
import APIOperator_Board from "../api/APIOperator_Board.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";

class BoardView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedTabIndex: 0,
            allArticleSummary: new Map()
        };
        this.updateState = function (data) {
            this.setState(data);
        };
        this.handleFocusedTabIndexChange = function (event, nextIndex) {
            let _react = this;
            if (this.props.boardInfoList[nextIndex] != null) {
                let boardId = this.props.boardInfoList[nextIndex].boardId;
                // 重复代码：1
                let currentAllArticleSummary = this.state.allArticleSummary;
                APIOperator_Board.getSummaryOfBoard({
                    boardId: boardId,
                    pageSize: 5,
                    currentPage: _react["BoardView_" + boardId].getCurrentPage(),
                    successCallback: function (response) {
                        currentAllArticleSummary.set(boardId, response);
                        _react.setState({currentAllArticleSummary: currentAllArticleSummary});
                    },
                    requestBefore: function () {
                        CallBackViewHelper.call_Loading_Linear_Unknown(true);
                    },
                    finallyCallback: function () {
                        CallBackViewHelper.call_Loading_Linear_Unknown(false);
                    },
                    errorCallback: function (response) {
                        CallBackViewHelper.call_LightTip({
                            isOpen: true,
                            type: "error",
                            msg: "发生了某种错误：" + JSON.stringify(response)
                        });
                    }
                });
            }
            this.setState({focusedTabIndex: nextIndex});
        }.bind(this);
        this.swipeableViewsChangeIndex = function (nextIndex, prevIndex) {
            this.handleFocusedTabIndexChange(event, nextIndex);
        }.bind(this);
        this.bindSingleBoardView = function (key, singleBoardView) {
            this["BoardView_" + key] = singleBoardView;
        }.bind(this);
        LogHelper.info({className: "BoardView", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "BoardView", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "BoardView", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "BoardView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "BoardView", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "BoardView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        if (this.props.boardInfoList != null) {
            return (
                <div style={{width: "100%", minHeight: "600px"}}>
                    <div style={{margin: "0px 16px"}}>
                        <Tabs
                            value={this.state.focusedTabIndex}
                            onChange={this.handleFocusedTabIndexChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            scrollButtons="auto"
                        >
                            {
                                this.props.boardInfoList.map((boardItem) => {
                                    return (
                                        <Tab label={
                                            <Badge color="secondary"
                                                   badgeContent={this.state.allArticleSummary.get(boardItem.boardId) == null ? "?" : this.state.allArticleSummary.get(boardItem.boardId).data.totalCount == null ? "?" : this.state.allArticleSummary.get(boardItem.boardId).data.totalCount}
                                                   style={{paddingRight: "20px"}}>
                                                {boardItem.boardName}
                                            </Badge>
                                        } key={boardItem.boardId} id={boardItem.boardId} style={{minWidth: "120px"}}/>
                                    )
                                })
                            }
                            <Tab label="N 日一句" style={{minWidth: "120px"}}/>
                            <Tab label="搜索结果" style={{minWidth: "120px"}}/>
                        </Tabs>
                        <SwipeableViews
                            index={this.state.focusedTabIndex}
                            onChangeIndex={this.swipeableViewsChangeIndex}
                        >
                            {
                                this.props.boardInfoList.map((boardItem) => {
                                    return (
                                        <Typography align={"center"} component={"div"}
                                                    key={boardItem.boardId}>
                                            <SingleBoardView currentAllArticleSummary={this.state.allArticleSummary}
                                                             bindSingleBoardView={this.bindSingleBoardView}
                                                             updateState={this.updateState.bind(this)}
                                                             boardItem={boardItem}
                                                             singleBoardInfo={this.state.allArticleSummary.has(boardItem.boardId) ? this.state.allArticleSummary.get(boardItem.boardId) : null}/>
                                        </Typography>
                                    );
                                })
                            }
                            <Typography align={"center"}><br/>暂未提供该功能 N 日一句</Typography>
                            <Typography align={"center"}><br/>暂未提供该功能 搜索结果</Typography>
                        </SwipeableViews>
                    </div>
                </div>
            );
        } else {
            return (null);
        }
    }

    componentDidMount() {
        LogHelper.info({className: "BoardView", msg: "componentDidMount----------"});
        this.handleFocusedTabIndexChange(null, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "BoardView", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "BoardView", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "State", msg: this.state, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "BoardView", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "BoardView", msg: "componentWillUnmount----------"});
    }
}

export default BoardView;