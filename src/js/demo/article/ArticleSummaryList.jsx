import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import SwipeableViews from 'react-swipeable-views';
import Typography from "@material-ui/core/es/Typography/Typography";
import Badge from "@material-ui/core/es/Badge/Badge";

class ArticleSummaryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.swipeableViewsChangeIndex = function (nextIndex, prevIndex) {
            this.props.handleFocusedTabIndexChange(event, nextIndex);
        }.bind(this);
        LogHelper.info({className: "ArticleSummaryList", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleSummaryList", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        if (this.props.boardInfoList != null) {
            return (
                <div style={{width: "100%", height: "600px"}}>
                    <div style={{margin: "0px 16px"}}>
                        <Tabs
                            value={this.props.focusedTabIndex}
                            onChange={this.props.handleFocusedTabIndexChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            scrollable
                            scrollButtons="auto"
                        >
                            {
                                this.props.boardInfoList.map((board, index) => {
                                    return (
                                        <Tab label={
                                            <Badge color="secondary"
                                                   badgeContent={null == null ? "?" : this.state.allSummary[board.boardId].totalCount}
                                                   style={{paddingRight: "20px"}}>
                                                {board.boardName}
                                            </Badge>
                                        } key={board.boardId} id={board.boardId} style={{minWidth:"120px"}}/>
                                    )
                                })
                            }
                            <Tab label="N 日一句" style={{minWidth:"120px"}}/>
                            <Tab label="搜索结果" style={{minWidth:"120px"}}/>
                        </Tabs>
                        <SwipeableViews
                            index={this.props.focusedTabIndex}
                            onChangeIndex={this.swipeableViewsChangeIndex}
                        >
                            <Typography align={"center"}><br/>技术</Typography>
                            <Typography align={"center"}><br/>随笔</Typography>
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
        LogHelper.info({className: "ArticleSummaryList", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillUnmount----------"});
    }
}

export default ArticleSummaryList;