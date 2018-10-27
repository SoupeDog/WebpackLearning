import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import ArticleSummaryItem from "./ArticleSummaryItem.jsx";
import APIOperator_Board from "../api/APIOperator_Board.jsx";

class SingleBoardView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            defaultPageSize: 5
        };
        LogHelper.info({className: "SingleBoardView", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "SingleBoardView", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "SingleBoardView", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "SingleBoardView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "SingleBoardView", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "SingleBoardView", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "SingleBoardView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "SingleBoardView", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "SingleBoardView", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.singleBoardInfo == null || (this.props.singleBoardInfo != null && this.props.singleBoardInfo.ts == nextProps.singleBoardInfo.ts)) {
            return true;
        } else {
            return true;
        }
    }

    render() {
        let articleSummaryList;
        if (this.props.singleBoardInfo != null) {
            articleSummaryList = this.props.singleBoardInfo.data.resultSet;
        } else {
            articleSummaryList = [];
        }
        return (
            <div>
                {articleSummaryList.map((articleSummary) => {
                    return (
                        <ArticleSummaryItem articleSummary={articleSummary}
                                            key={articleSummary.articleId}/>
                    )
                })}
                <div style={{width: "100%", minHeight: "40px"}}>
                    <div id={"pageMenu_" + this.props.boardItem.boardId} className="pageControl"></div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "SingleBoardView", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let _react = this;
        if (this.props.singleBoardInfo != null && this.state.pageController == null) {
            let pageController = $("#pageMenu_" + this.props.boardItem.boardId).pagination({
                coping: false,
                jump: false,
                prevContent: '上一页',
                nextContent: '下一页',
                current: this.state.currentPage,
                count: this.state.defaultPageSize,
                pageCount: Math.ceil(this.props.singleBoardInfo.data.totalCount / this.state.defaultPageSize),
                activeCls: 'active',
                callback: function (api) {
                    // 重复代码：1
                    let currentAllArticleSummary = _react.props.currentAllArticleSummary;
                    APIOperator_Board.getSummaryOfBoard({
                        boardId: _react.props.boardItem.boardId,
                        pageSize: _react.state.defaultPageSize,
                        currentPage: api.getCurrent(),
                        successCallback: function (response) {
                            currentAllArticleSummary.set(_react.props.boardItem.boardId, response);
                            _react.props.updateState({currentAllArticleSummary: currentAllArticleSummary});
                            window.setTimeout(function () {
                                _react.setState({
                                    currentPage: api.getCurrent()
                                });
                            }, 500);
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
            this.setState({pageController: pageController})
        }
        LogHelper.info({className: "SingleBoardView", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "SingleBoardView", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "SingleBoardView", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "SingleBoardView", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "SingleBoardView", msg: "componentWillUnmount----------"});
    }
}

export default SingleBoardView;