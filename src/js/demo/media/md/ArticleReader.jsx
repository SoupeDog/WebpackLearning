import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";
import ArticleTitle from "./ArticleTitle.jsx";
import ArticleContent from "./ArticleContent.jsx";
import ArticleCatlog from "./ArticleCatlog.jsx";
import ArticleMenu from "./ArticleMenu.jsx";
import Hidden from "@material-ui/core/es/Hidden/Hidden";

class ArticleReader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catalogIsOpen: false
        };
        this.catalogTrigger = this.catalogTrigger.bind(this);
        LogHelper.info({className: "ArticleReader", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleReader", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleReader", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleReader", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleReader", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleReader", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleReader", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleReader", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleReader", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.state.catalogIsOpen == nextState.catalogIsOpen &&
            this.props.article.lastUpdateTs == nextProps.article.lastUpdateTs) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.state.catalogIsOpen) {
            return (
                <Grid container spacing={0} justify="center">
                    <Grid item xs={2}>
                        <ArticleCatlog catalogIsOpen={this.state.catalogIsOpen} article={this.props.article}
                                       key={"ArticleCatlog"}/>
                    </Grid>
                    <Grid container spacing={0} justify="center" item xs={10}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={10}>
                            <ArticleTitle article={this.props.article} key={"ArticleTitle"}/>
                            <ArticleContent article={this.props.article} key={"ArticleContent"}/>
                        </Grid>
                        <Grid item xs={1}>
                            <Hidden only={["xs", "sm"]}>
                                <ArticleMenu catalogTrigger={this.catalogTrigger}
                                             catalogIsOpen={this.state.catalogIsOpen}
                                             key={"ArticleMenu"}/>
                            </Hidden>
                        </Grid>
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <Grid container spacing={0} justify="center">
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <ArticleTitle article={this.props.article} key={"ArticleTitle"}/>
                        <ArticleContent article={this.props.article} key={"ArticleContent"}/>
                    </Grid>
                    <Grid item xs={1}>
                        <Hidden only={["xs", "sm"]}>
                            <ArticleMenu catalogTrigger={this.catalogTrigger} catalogIsOpen={this.state.catalogIsOpen}
                                         key={"ArticleMenu"}/>
                        </Hidden>
                    </Grid>
                </Grid>
            );
        }
    }

    componentDidMount() {
        let _react = this;
        LogHelper.info({className: "ArticleReader", msg: "componentDidMount----------"});
        // window.setTimeout(function () {
        //     _react.setState({catalogIsOpen:true});
        // },4000);
        // window.setTimeout(function () {
        //     _react.setState({catalogIsOpen:false});
        // },8000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleReader", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleReader", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleReader", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleReader", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleReader", msg: "componentWillUnmount----------"});
    }

    catalogTrigger() {
        this.setState({catalogIsOpen: !this.state.catalogIsOpen});
    }
}

export default ArticleReader;