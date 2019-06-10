import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import MarkdownHelper from "../../utils/MarkdownHelper.jsx";

class ArticleContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "ArticleContent", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleContent", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleContent", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleContent", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleContent", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleContent", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleContent", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleContent", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleContent", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.article == null || this.props.article.lastUpdateTs == nextProps.lastUpdateTs) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div id={"article_Content"} className="hyggeWriter_Markdown_Reader">内容</div>
        );
    }

    componentDidMount() {
        this.freshArticle();
        LogHelper.info({className: "ArticleContent", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.freshArticle();
        LogHelper.info({className: "ArticleContent", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleContent", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleContent", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleContent", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleContent", msg: "componentWillUnmount----------"});
    }

    freshArticle() {
        if (this.props.article) {
            MarkdownHelper.formatToHtml({
                content: this.props.article.content,
                containerId: "article_Content",
                catalogId: "article_Catalog",
                useCatalog: true
            });
        }
    }
}

export default ArticleContent;