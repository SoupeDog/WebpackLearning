import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";
import WindowsEventHelper from "../../../utils/WindowsEventHelper.jsx";
import Slide from "@material-ui/core/es/Slide/Slide";

class ArticleCatlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            needFixed: true
        };
        LogHelper.info({className: "ArticleCatlog", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleCatlog", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleCatlog", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleCatlog", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleCatlog", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleCatlog", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleCatlog", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleCatlog", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleCatlog", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <Slide direction="right" in={true} mountOnEnter>
                <div id="article_Catalog" className="hyggeWriter_Markdown_Catalog" style={{
                    width: this.state.needFixed ? "16.66666%" : "100%",
                    position: this.state.needFixed ? "fixed" : "static",
                    top: "64px",
                    height: (window.innerHeight - 64) + "px",
                }} dangerouslySetInnerHTML={{__html: $("#catLogSource").html()}}>
                </div>
            </Slide>
        );
    }

    componentDidMount() {
        let _react = this;
        WindowsEventHelper.addCallback_Scroll({
            name: "日志目录固定检查", delta: 150, callbackFunction: function ({currentScrollY}) {
                if (currentScrollY > 330) {
                    _react.setState({needFixed: true});
                } else {
                    _react.setState({needFixed: false});
                }
            }
        });
        LogHelper.info({className: "ArticleCatlog", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleCatlog", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleCatlog", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleCatlog", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleCatlog", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleCatlog", msg: "componentWillUnmount----------"});
    }
}

export default ArticleCatlog;