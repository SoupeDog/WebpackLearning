import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import BoardAPIOperator from "./api/BoardAPIOperator.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";

let pageControllerAPI;

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
            <div id={"boardPageController" + this.props.boardId} className={"pageControl"}>
            </div>
        );
    }

    componentDidMount() {
        let _react = this;
        pageControllerAPI = $("#boardPageController" + this.props.boardId).pagination({
            coping: false,
            jump: false,
            prevContent: '上一页',
            nextContent: '下一页',
            current: this.props.currentPage,
            count: this.props.defaultPageSize,
            pageCount: Math.ceil(this.props.totalCount / this.props.defaultPageSize),
            activeCls: 'active',
            callback: function (api) {
                BoardAPIOperator.getSummaryOfBoard({
                    boardId: _react.props.boardId,
                    pageSize: _react.props.defaultPageSize,
                    currentPage: api.getCurrent(),
                    successCallback: function (response) {
                        _react.props.changeAllBoardSummary(_react.props.boardId, response);
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
        });
        LogHelper.info({className: "PageMenu", msg: "componentDidMount----------"});
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