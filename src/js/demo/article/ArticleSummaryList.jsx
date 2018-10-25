import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import SwipeableViews from 'react-swipeable-views';
import Typography from "@material-ui/core/es/Typography/Typography";

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
        return (
            <div style={{width:"100%",}}>
                <Tabs
                    value={this.props.focusedTabIndex}
                    onChange={this.props.handleFocusedTabIndexChange}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                    scrollable
                    scrollButtons="auto"
                >
                    <Tab label="N 日一句1"/>
                    <Tab label="搜索结果2"/>
                    <Tab label="N 日一句3"/>
                    <Tab label="搜索结果4"/>
                    <Tab label="N 日一句5"/>
                    <Tab label="搜索结果6"/>
                    <Tab label="N 日一句7"/>
                    <Tab label="搜索结果8"/>
                    <Tab label="N 日一句9"/>
                    <Tab label="搜索结果10"/>
                </Tabs>
                <SwipeableViews
                    index={this.props.focusedTabIndex}
                    onChangeIndex={this.swipeableViewsChangeIndex}
                >
                    <Typography align={"center"}><br/>暂未提供该功能 N 日一句1</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 搜索结果2</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 N 日一句3</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 搜索结果4</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 N 日一句5</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 搜索结果6</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 N 日一句7</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 搜索结果8</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 N 日一句9</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能 搜索结果10</Typography>
                </SwipeableViews>
            </div>
        );
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