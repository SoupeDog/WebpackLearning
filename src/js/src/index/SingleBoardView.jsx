import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import ArticleSummaryItem from "./ArticleSummaryItem.jsx";
import PageMenu from "../PageMenu.jsx";

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
                  <PageMenu currentPage={this.state.currentPage} defaultPageSize={this.state.defaultPageSize}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "SingleBoardView", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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