import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Badge from "@material-ui/core/Badge/Badge";
import SingleBoardView from "./SingleBoardView.jsx";
import SwipeableViews from "react-swipeable-views";
import BoardAPIOperator from "../api/BoardAPIOperator.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";

class IndexBoardTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultPageSize: 5,
            currentBoardIndex: 0,
            allBoardSummary: new Map(),
            allBoardSummaryTotalCount: new Map()
        };
        this.swipeableViewsChangeIndex = function (nextIndex, prevIndex) {
            this.changeCurrentBoard(null, nextIndex);
        }.bind(this);
        this.changeCurrentBoard = function (event, boardIdIndex) {
            if (boardIdIndex != 0 && this.state.currentBoardIndex == boardIdIndex) {
                return;
            }
            switch (boardIdIndex) {
                case 0:
                case 1:
                    let _react = this;
                    let boardId = _react.props.boardList[boardIdIndex].boardId;
                    BoardAPIOperator.getSummaryOfBoard({
                        boardId: boardId,
                        pageSize: _react.state.defaultPageSize,
                        currentPage: 1,
                        successCallback: function (response) {
                            _react.changeAllBoardSummary(boardId, response);
                            _react.changeAllBoardSummaryTotalCount(boardId, response.data.totalCount);
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
                    break;
                default:
            }
            this.setState({
                currentBoardIndex: boardIdIndex
            });
        }.bind(this);
        this.changeAllBoardSummary = function (boardId, singleBoardSummary) {
            let currentAllBoardSummary = this.state.allBoardSummary;
            currentAllBoardSummary.set(boardId, singleBoardSummary);
            this.setState({
                allBoardSummary: currentAllBoardSummary
            });
        }.bind(this);
        this.changeAllBoardSummaryTotalCount = function (boardId, totalCount) {
            let currentAllBoardSummaryTotalCount = this.state.allBoardSummaryTotalCount;
            currentAllBoardSummaryTotalCount.set(boardId, totalCount);
            this.setState({
                allBoardSummaryTotalCount: currentAllBoardSummaryTotalCount
            });
        }.bind(this);
        this.getBoardSummaryTotalCount = function (boardId) {
            if (this.state.allBoardSummaryTotalCount.has(boardId)) {
                return this.state.allBoardSummaryTotalCount.get(boardId);
            }
            return null;
        }.bind(this);
        LogHelper.info({className: "IndexBoardTabs", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexBoardTabs", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <div>
                {this.renderTabs()}
                {this.renderBoardView()}
            </div>
        );
    }

    renderTabs() {
        return (
            <AppBar position="static" color="default">
                <Tabs
                    value={this.state.currentBoardIndex}
                    onChange={this.changeCurrentBoard}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    scrollButtons="auto"
                >
                    {
                        this.props.boardList.map((boardItem) => {
                            return (
                                <Tab label={
                                    <Badge color="secondary"
                                           badgeContent={this.getBoardSummaryTotalCount(boardItem.boardId) == null ? "?" : this.getBoardSummaryTotalCount(boardItem.boardId)}
                                           style={{paddingRight: "20px"}}>
                                        {boardItem.boardName}
                                    </Badge>
                                } key={boardItem.boardId + "_tab"} style={{minWidth: "120px"}}/>
                            )
                        })
                    }
                    <Tab label="句子收藏"/>
                    <Tab label="最新动态"/>
                </Tabs>
            </AppBar>
        );
    }

    renderBoardView() {
        return (
            <SwipeableViews
                index={this.state.currentBoardIndex}
                onChangeIndex={this.swipeableViewsChangeIndex}
            >
                {
                    this.props.boardList.map((boardItem) => {
                        return (
                            <Typography key={boardItem.boardId + "_view"} align={"center"} component={"div"}>
                                <SingleBoardView boardId={boardItem.boardId}
                                                 currentBoardArticleSummary={this.state.allBoardSummary.get(boardItem.boardId)}
                                                 changeAllBoardSummary={this.changeAllBoardSummary}
                                                 changeAllBoardCurrentPage={this.changeAllBoardCurrentPage}/>
                            </Typography>
                        )
                    })
                }
                <Typography align={"center"}><br/>暂未提供该功能 句子搜藏</Typography>
                <Typography align={"center"}><br/>暂未提供该功能 最新动态</Typography>
            </SwipeableViews>
        );
    }

    componentDidMount() {
        this.changeCurrentBoard(null, 0);
        LogHelper.info({className: "IndexBoardTabs", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillUnmount----------"});
    }
}

export default IndexBoardTabs;