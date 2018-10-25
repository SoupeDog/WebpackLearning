import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../component/BaseComponent.jsx";
import Menu_Top_Browse from "./menu/Menu_Top_Browse.jsx";


import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import WindowsEventHelper from "../utils/WindowsEventHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import LogHelper from "../utils/LogHelper.jsx";
import URLHelper from "../utils/URLHelper.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import CallBackView from "../component/CallBackView.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import MusicPlayer from "./media/music/MusicPlayer.jsx";
import ArticleReader from "./media/md/ArticleReader.jsx";
import APIOperator_Article from "./api/APIOperator_Article.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());

class BrowseContainer extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            articleId: URLHelper.getQueryString("id"),
            headers: {
                uId: "U00000000",
                token: "0",
                scope: "web",
                secretKey: URLHelper.getQueryString("secretKey")
            },
            articleObj: null,
            // {
            //         articleId: "848aa75a9baa4b019f8bf152e6b4ed17",
            //         boardName: "技术",
            //         title: "Java 快速入门---基本语法",
            //         articleCategoryId: "9f4703e7a3954e19b6284d5c5a41817c",
            //         articleCategoryName: "Java",
            //         uId: "U00000001",
            //         statementId: "",
            //         summary: "Java 从入门到跑路",
            //         content: "# 常用语法\n" +
            //         wordCount: 12,
            //         articleRetainType: "DEFAULT",
            //         articlePath: null,
            //         pageViews: 0,
            //         legal_Flag: true,
            //         properties: {
            //             // bgm: "https://music.163.com/outchain/player?type=2&id=34014166&auto=1&height=66",
            //             image: "https://s1.ax2x.com/2018/10/24/5XWUJa.jpg"
            //             // image: "https://s1.ax2x.com/2018/10/13/5TywRO.jpg"
            //         },
            //         lastUpdateTs: 1536494132974,
            //         ts: 1536494132974
            //     },
        };
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
        if (nextState.articleObj == null || (this.state.articleObj != null && this.state.articleObj.lastUpdateTs == nextState.lastUpdateTs)) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                    {this.state.articleObj == null ? null :
                        <div>
                            <Menu_Top_Browse autoTransparent/>
                            <Grid container spacing={0} justify="center">
                                <Grid id="banner" item xs={12}>
                                    {this.state.articleObj.properties.image != null ?
                                        <CardMedia
                                            image={this.state.articleObj.properties.image}
                                            style={{height: "300px", objectFit: 'cover'}}/>
                                        : null}
                                </Grid>
                                <Grid id="bgm_Player" item xs={12}>
                                    {this.state.articleObj.properties.bgm != null ?
                                        <MusicPlayer src={this.state.articleObj.properties.bgm}/>
                                        : null}
                                </Grid>
                                <Grid id="article" item xs={12}>
                                    <ArticleReader article={this.state.articleObj}/>
                                </Grid>
                            </Grid>
                        </div>
                    }
                    <CallBackView/>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    componentDidMount() {
        WindowsEventHelper.start_OnResize();
        WindowsEventHelper.start_OnScroll();
        this.freshArticleData({articleId: this.state.articleId, headers: this.state.headers});
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

    freshArticleData({articleId, headers}) {
        let _react = this;
        APIOperator_Article.getArticleInfo({
            headers: headers,
            articleId: articleId,
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                if (response.data.length > 0) {// 确保已查询到结果
                    document.title = response.data[0].title// 设置 html tile
                    let articleTemp = response.data[0];
                    let currentArticle = articleTemp;
                    if (articleTemp.properties == null) {
                        currentArticle.properties = {};
                    } else {
                        currentArticle.properties = JSON.parse(articleTemp.properties);
                    }
                    _react.setState({articleObj: currentArticle});
                    // window.setTimeout(function () {// 确保 articleObj 被更新再刷新 MD 显示内容
                    //     _react.s();
                    // }, 500);
                } else {
                    CallBackViewHelper.call_LightTip({isOpen: true, type: "error", msg: "未检索到文章内容，请查证博文编号是否存在"});
                }
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
    }
}

export default BrowseContainer;