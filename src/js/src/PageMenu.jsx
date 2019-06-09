import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import Paper from "@material-ui/core/Paper/Paper";

class PageMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "PageMenu", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "PageMenu", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "PageMenu", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "PageMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "PageMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "PageMenu", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "PageMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "PageMenu", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "PageMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <Paper id={"boardPageController"} className={"pageControl"}>
            </Paper>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "PageMenu", msg: "componentDidMount----------"});
        let pageController = $("#boardPageController").pagination({
            coping: false,
            jump: false,
            prevContent: '上一页',
            nextContent: '下一页',
            current: this.props.currentPage,
            count: this.props.defaultPageSize,
            pageCount: Math.ceil(100 / this.props.defaultPageSize),
            activeCls: 'active',
            callback: function (api) {
                // 重复代码：1
                console.log(api.getCurrent());
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "PageMenu", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "PageMenu", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "PageMenu", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "PageMenu", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "PageMenu", msg: "componentWillUnmount----------"});
    }
}

export default PageMenu;