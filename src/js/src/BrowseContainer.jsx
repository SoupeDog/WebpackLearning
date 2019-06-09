import React from 'react';
import ReactDOM from 'react-dom';


import WindowsEventHelper from "../utils/WindowsEventHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import LogHelper from "../utils/LogHelper.jsx";
import URLHelper from "../utils/URLHelper.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import CallBackView from "../component/CallBackView.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import ArticleAPIOperator from "./api/ArticleAPIOperator.jsx";
import BrowseAppBar from "./browse/BrowseAppBar.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import clsx from "clsx";
import {withStyles} from "@material-ui/core";
import PropertiesHelper from "../utils/PropertiesHelper.jsx";
import TimeHelper from "../utils/TimeHelper.jsx";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

import VisibilityIcon from '@material-ui/icons/Visibility';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import ArticleContent from "./browse/ArticleContent.jsx";

const styles = theme => ({
    articleTitle: {
        fontSize: "52px",
        fontWeight: 800,
        color: "#000",
        lineHeight: "100px"
    },
    articleTitle_Phone: {
        fontSize: "20px",
        fontWeight: 800,
        lineHeight: "60px"
    },
    articleInfo: {
        fontSize: "14px",
        color: "#aaa",
        lineHeight: "40px"
    },
    articleContent: {
        fontSize: "18px",
        color: "#000",
        lineHeight: "40px"
    }
});

class BrowseContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articleId: URLHelper.getQueryString("id"),
            article: null,
            currentUser: null,
            articleCatalogIsOpen: false
        };
        this.setStateToRoot = function (properties) {
            this.setState(properties);
        }.bind(this);
        this.openArticleCatalog = function () {
            this.setState({
                articleCatalogIsOpen: true
            });
        }.bind(this);
        this.closeArticleCatalog = function () {
            this.setState({
                articleCatalogIsOpen: false
            });
        }.bind(this);
        this.freshArticleData = function (articleId) {
            let _react = this;
            ArticleAPIOperator.getArticleInfo({
                articleId: articleId,
                requestBefore: function () {
                    CallBackViewHelper.call_Loading_Linear_Unknown(true);
                },
                successCallback: function (response) {
                    document.title = response.data.title// 设置 html tile
                    let articleTemp = response.data;
                    let currentArticle = articleTemp;
                    if (articleTemp.properties == null) {
                        currentArticle.properties = {};
                    } else {
                        currentArticle.properties = JSON.parse(articleTemp.properties);
                    }
                    _react.setState({article: currentArticle});
                },
                errorCallback: function (response) {
                    CallBackViewHelper.call_LightTip({
                        isOpen: true,
                        type: "error",
                        msg: "发生了某种错误：" + JSON.stringify(response)
                    });
                },
                finallyCallback: function () {
                    CallBackViewHelper.call_Loading_Linear_Unknown(false);
                }
            });
        }.bind(this);

        LogHelper.info({className: "BrowseContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "BrowseContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "BrowseContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "BrowseContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "BrowseContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "BrowseContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "BrowseContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "BrowseContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "BrowseContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                <BrowseAppBar currentUser={this.state.currentUser}
                              setStateToRoot={this.setStateToRoot}/>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {(this.state.article != null && this.state.article.properties.image != null) &&
                    <Grid item xs={12}
                          className={clsx({"backgroundTransparent": this.state.menu_Top_BackgroundTransparent})}>
                        <CardMedia
                            image={this.state.article.properties.image}
                            style={{height: "360px", objectFit: 'cover'}}
                        />
                    </Grid>
                    }
                    <Grid item xs={12}>
                        {(this.state.article != null && this.state.article.properties.bgm != null) &&
                        <iframe className="wangYi_CloudMusic"
                                style={{
                                    margin: 0,
                                    border: "0",
                                    padding: "0",
                                    width: "100%",
                                    height: "80px"
                                }} src={this.state.article.properties.bgm}>
                        </iframe>
                        }
                    </Grid>
                    {(this.state.article != null && this.state.article.title != null) &&
                    <Grid item xs={12}>
                        <div id={"catalog"} className={clsx("floatLeft", {
                            "articleCatalogContainer_close": !this.state.articleCatalogIsOpen,
                            "articleCatalogContainer": this.state.articleCatalogIsOpen
                        })} onClick={this.closeArticleCatalog}>
                        </div>
                        <div id={"articleMain"} className={clsx("floatLeft", {
                            "articleContainer_small": this.state.articleCatalogIsOpen,
                            "articleContainer": !this.state.articleCatalogIsOpen
                        })}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item xs={1}></Grid>
                                <Grid item xs={10} onClick={this.openArticleCatalog}>
                                    <div
                                        className={"clearBoth " + this.props.classes.articleTitle}>{this.state.article.title}</div>
                                    <div className={"clearBoth"}>
                                        <Grid id="articleInfo" item xs={12} className={this.props.classes.articleInfo}
                                              container direction="row"
                                              justify="flex-start" alignItems="baseline">
                                            <Grid item xs={12} lg={4}>
                                                <span id="articlePlates">
                                                    {this.state.article.boardName}
                                                </span>
                                                <span className="separate" style={{marginLeft: "5px"}}>/</span>
                                                <span id="articlePlates" style={{marginLeft: "5px"}}>
                                                    {PropertiesHelper.arrayToString({
                                                        isStandard: false,
                                                        array: this.state.article.articleCategoryPath,
                                                        targetVal: "articleCategoryName"
                                                    }).replace(/,/g, "-")}
                                                </span>
                                                <Tooltip title={"创建日期"}>
                                                    <span id="articleDate" style={{marginLeft: "20px"}}>
                                                        <AccessTimeIcon style={{
                                                            fontSize: "12px",
                                                            color: "#aaa",
                                                            lineHeight: "40px"
                                                        }}/>&nbsp;
                                                        {TimeHelper.formatTimeStampToString({
                                                            target: this.state.article.ts == null ? 0 : this.state.article.ts,
                                                            type: "yyyy-mm-dd"
                                                        })}
                                                    </span>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item xs={12} lg={8}>
                                                <Tooltip title={"字数统计(近似值)"}>
                                                    <span id="articleWordCount">
                                                        <EditIcon style={{
                                                            fontSize: "12px",
                                                            color: "#aaa",
                                                            lineHeight: "40px"
                                                        }}/>&nbsp;
                                                        &nbsp;{this.state.article.wordCount}&nbsp;字
                                                    </span>
                                                </Tooltip>
                                                <Tooltip title={"浏览量"}>
                                                    <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                                                        <VisibilityIcon style={{
                                                            fontSize: "12px",
                                                            color: "#aaa",
                                                            lineHeight: "40px"
                                                        }}/>&nbsp;
                                                        {this.state.article.pageViews < 1000 ? "1k以内" : this.state.article.pageViews}
                                                    </span>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        <ArticleContent article={this.state.article}/>
                                    </div>
                                </Grid>
                                <Grid item xs={1}></Grid>
                            </Grid>
                        </div>
                    </Grid>
                    }
                </Grid>
                <CallBackView/>
            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        WindowsEventHelper.start_OnResize();
        WindowsEventHelper.start_OnScroll();
        UserAPIOperator.preLogin({setStateToRoot: this.setStateToRoot});
        this.freshArticleData(this.state.articleId);
        LogHelper.info({className: "BrowseContainer", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "BrowseContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "BrowseContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "BrowseContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "BrowseContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "BrowseContainer", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(BrowseContainer);