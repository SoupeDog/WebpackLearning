import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";

class ArticleTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "ArticleTitle", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleTitle", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <div>标题</div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleTitle", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillUnmount----------"});
    }
}

export default ArticleTitle;