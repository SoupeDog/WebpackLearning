import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import Grid from "@material-ui/core/es/Grid/Grid";
import {withStyles} from "@material-ui/core/styles/index";
import HW_Menu from "./HW_Menu.jsx";
import MarkdownHelper from "../utils/MarkdownHelper.jsx";
import WindowsScrollHelper from "../utils/WindowsScrollHelper.jsx";
import APIOperator_Article from "./APIOperator_Article.jsx";
import TOCIcon from '@material-ui/icons/toc';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Hidden from "@material-ui/core/es/Hidden/Hidden";
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Slide from "@material-ui/core/es/Slide/Slide";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


const styles = theme => ({
    articleHeaderRow: {
        display: "inline-block",
        float: "left"
    },
    articleTitle: {
        fontSize: "60px",
        fontWeight: 800,
        color: "#000",
        lineHeight: "100px"
    },
    articleTitle_Phone: {
        fontSize: "24px",
        fontWeight: 800,
        color: "#000",
        lineHeight: "60px"
    },
    articleInfo: {
        fontSize: "14px",
        color: "#aaa",
        lineHeight: "40px"
    },
    tag_Box: {},
    tag: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "16px"
    },
    tag_Avatar: {
        width: "40px",
        height: "40px"
    }
});


class BrowseContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            finalProperties: {
                topMenuBarHeight: 60,
                topMenuBarChangeLimitY: 270,
                articleUIChangeLimitY: 370
            },
            articleId: this.URLHelper.getQueryString("id"),
            headers: {
                uId: "U00000000",
                token: "0",
                scope: "web",
                secretKey: ""
            },
            articleObj: {
                // articleId: "848aa75a9baa4b019f8bf152e6b4ed17",
                // boardName: "技术",
                // title: "Java 快速入门---基本语法",
                // articleCategoryId: "9f4703e7a3954e19b6284d5c5a41817c",
                // articleCategoryName: "Java",
                // uId: "U00000001",
                // statementId: "",
                // summary: "Java 从入门到跑路",
                // content: "# 1。12",
                // wordCount: 12,
                // articleRetainType: "DEFAULT",
                // articlePath: null,
                // pageViews: 0,
                // legal_Flag: true,
                // lastUpdateTs: 1536494132974,
                // ts: 1536494132974
            },
            mainTheme: this.StyleHelper.getLightTheme_Black_Purple(),
            catalog_Hide: true,
            bgm_Stop: false,
            article_Catalog_NeedChange: false,
            rightMenu_NeedChange: false,
            WindowsScrollHelper: new WindowsScrollHelper()
        }
        this.LogHelper.info({msg: "constructor----------"});
        this.LogHelper.debug({tag: "props", msg: props, isJson: true});
    }

    componentWillMount() {
        this.LogHelper.info({msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.LogHelper.info({msg: "componentWillReceiveProps----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.LogHelper.info({msg: "shouldComponentUpdate----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextState", msg: nextState, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
        if (window.innerWidth < 768) {
            nextState.catalog_Hide = true;
        }
        return true;
    }

    freshArticle() {
        MarkdownHelper.formatToHtml({
            content: this.state.articleObj.content == null ? "" : this.state.articleObj.content,
            containerId: "article_Content",
            catalogId: "catLogSource",
            useCatalog: true
        });
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.state.mainTheme}>
                    <CallBackView componentName={"CallBackView"} setParentNode={this.setParentNode.bind(this)}/>
                    <HW_Menu id="topMenuBar"
                             changeLimitY={this.state.finalProperties.topMenuBarChangeLimitY}
                             WindowsScrollHelper={this.state.WindowsScrollHelper}
                             updateState={this.updateState.bind(this)}/>
                    <Grid id="banner" container spacing={0} justify="center">
                        <Grid id="top_BackgroundImg" item xs={12}></Grid>
                        <Grid id="bgm_Player" item xs={12}>
                            <iframe name="wy_music"
                                    style={{
                                        margin: 0,
                                        border: "0",
                                        padding: "0",
                                        width: "100%",
                                        height: "80px"
                                    }} src="https://music.163.com/outchain/player?type=2&id=571541787&auto=1&height=66">
                            </iframe>
                        </Grid>
                        <Grid id="article" item xs={12} container spacing={0} justify="center">
                            {this.renderArticleCatLog(this.state.catalog_Hide)}
                            {this.renderMain(this.state.catalog_Hide, this.state.articleObj)}
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    renderArticleCatLog(catalogHide) {
        if (catalogHide) {
            return (null);
        } else {
            return (
                <Hidden only={["xs", "sm"]}>
                    <Grid item xs={2}>
                        <Slide direction="right" in={!this.state.catalog_Hide} mountOnEnter unmountOnExit>
                            <div id="article_Catalog" className="hyggeWriter_Markdown_Catalog" style={{
                                width: this.state.article_Catalog_NeedChange ? "16.66666%" : "100%",
                                position: this.state.article_Catalog_NeedChange ? "fixed" : "static",
                                top: this.state.finalProperties.topMenuBarHeight + "px",
                                height: (window.innerHeight - this.state.finalProperties.topMenuBarHeight) + "px",
                            }} dangerouslySetInnerHTML={{__html: $("#catLogSource").html()}}>
                            </div>
                        </Slide>
                    </Grid>
                </Hidden>
            );
        }
    }

    renderArticleTitle(articleObj) {
        return (
            <Grid item xs={12} container direction="row" justify="flex-start" alignItems="baseline">
                <Hidden mdDown>
                    <Grid id="title" className={this.props.classes.articleTitle} item xs={12}>{articleObj.title}</Grid>
                </Hidden>
                <Hidden lgUp>
                    <div id="title" className={this.props.classes.articleTitle_Phone}>{articleObj.title}</div>
                </Hidden>
                <Grid id="articleTags" className={this.props.classes.tag_Box} item xs={12} container>
                    <Chip className={this.props.classes.tag} clickable label="Tag 功能待上线" color="secondary"
                          avatar={<Avatar className={this.props.classes.tag_Avatar}
                                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535520657529&di=78d823beb3585733d9d56375fb5d7975&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F42%2F83574716ee2ac08.jpg"/>}/>
                </Grid>
                <Grid id="articleInfo" item xs={12} className={this.props.classes.articleInfo} container direction="row"
                      justify="flex-start" alignItems="baseline">
                    <Grid item xs={12} lg={4}>
                        <span id="articlePlates">
                            {articleObj.boardName}
                        </span>
                        <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                        <span id="articlePlates" style={{marginLeft: "5px"}}>
                            {articleObj.articleCategoryName}
                        </span>
                        <Tooltip title={"最后修改日期"}>
                            <span id="articleDate" style={{marginLeft: "20px"}}>
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {this.TimeHelper.formatTimeStampToString({
                                    target: articleObj.lastUpdateTs == null ? 0 : articleObj.lastUpdateTs,
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
                            &nbsp;{articleObj.wordCount}&nbsp;字
                        </span>
                        </Tooltip>
                        <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {articleObj.pageViews < 1000 ? "1k以内" : articleObj.pageViews}
                        </span>
                        </Tooltip>
                        <Tooltip title={"评论数"}>
                        <span id="articleCommentCount" style={{marginLeft: "40px"}}>
                            <CommentIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {0}
                        </span>
                        </Tooltip>
                    </Grid>
                    {/*<Tooltip title={"毕竟口头说不许转载也没多大约束力，上版权印之类的也很麻烦 (〜￣△￣)〜"}>*/}
                    {/*<Grid item xs={12} className={"autoWrap"} style={{lineHeight: "20px"}}>*/}
                    {/*版权声明：本文为 Xavier 原创文章，如需转载，请先联系我，并声明文章来源---*/}
                    {/*{window.location.href}*/}
                    {/*</Grid>*/}
                    {/*</Tooltip>*/}
                </Grid>
            </Grid>
        );
    }

    renderArticleMenu() {
        return (
            <Hidden only={["xs", "sm"]}>
                <div id="article_RightMenu" style={{
                    position: this.state.rightMenu_NeedChange ? "fixed" : "static",
                    marginTop: this.state.rightMenu_NeedChange ? "0px" : "400px"
                }}>
                    <Grid item xs={12} container spacing={0} direction="column" justify="flex-start">
                        <Grid item>
                            <Tooltip title={this.state.catalog_Hide ? "展开目录" : "收起目录"} placement="left">
                                <IconButton variant="outlined" color="secondary"
                                            style={{display: "block", margin: "0px auto"}}
                                            onClick={this.catalogTrigger.bind(this)}>
                                    <TOCIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="返回顶部" placement="left">
                                <IconButton variant="outlined" color="secondary"
                                            style={{display: "block", margin: "0px auto"}}
                                            onClick={() => {
                                                window.scrollTo(0, 330);
                                            }
                                            }>
                                    <ArrowUpwardIcon/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </div>
            </Hidden>
        );
    }

    renderMain(catalogHide, articleObj) {
        return (
            <Grid id="article_Main" item xs={12} sm={catalogHide ? 12 : 10} container spacing={0} justify="center"
                  style={{minHeight: window.innerHeight - this.state.finalProperties.topMenuBarHeight}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} container spacing={0} justify="center">
                    {this.renderArticleTitle(articleObj)}
                    <div id="article_Content" className="hyggeWriter_Markdown_Reader">
                    </div>
                </Grid>
                <Grid item xs={1} container spacing={0} direction="column" justify="flex-start" alignItems="center">
                    {this.renderArticleMenu()}
                </Grid>
            </Grid>
        );
    }

    componentDidMount() {
        this.LogHelper.info({msg: "componentDidMount----------"});
        this.LogHelper.debug({msg: ""});
        this.state.WindowsScrollHelper.addCallback("修正目录图钉", this.checkCatalogPosition.bind(this));
        this.state.WindowsScrollHelper.addCallback("修正右侧菜单图钉", this.checkRightMenuPosition.bind(this));
        this.state.WindowsScrollHelper.start();
        this.freshArticle();
        this.freshArticleData({articleId: this.state.articleId, headers: this.state.headers});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.LogHelper.info({msg: "componentDidUpdate----------"});
        this.LogHelper.debug({tag: "prevProps", msg: prevProps, isJson: true});
        this.LogHelper.debug({tag: "prevState", msg: prevState, isJson: true});
        this.LogHelper.debug({tag: "snapshot", msg: snapshot, isJson: true});
        this.LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        this.LogHelper.info({msg: "componentWillUnmount----------"});
        this.LogHelper.debug({msg: ""});
    }

    catalogTrigger() {
        let prevState = this.state.catalog_Hide;
        if (prevState) {
            this.setState({catalog_Hide: false});
        } else {
            this.setState({catalog_Hide: true});
        }
    }

    freshArticleData({articleId, headers}) {
        let _react = this;
        APIOperator_Article.getArticleInfo({
            headers: headers,
            articleId: articleId,
            requestBefore: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                if (response.data.length > 0) {// 确保已查询到结果
                    _react.setState({articleObj: response.data[0]});
                    window.setTimeout(function () {// 确保 articleObj 被更新再刷新 MD 显示内容
                        _react.freshArticle();
                    }, 500);
                } else {
                    _react.CallBackView.call_LightTip({isOpen: true, type: "error", msg: "未检索到文章内容，将在3秒内为您跳转回主页"});
                }
            },
            finallyCallback: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(false);
            }
        });
    }

    checkCatalogPosition(currentY) {// 与上次状态不同才更新
        if (currentY > this.state.finalProperties.articleUIChangeLimitY) {
            if (!this.state.article_Catalog_NeedChange) {
                this.setState({article_Catalog_NeedChange: true});
            }
        } else {
            if (this.state.article_Catalog_NeedChange) {
                this.setState({article_Catalog_NeedChange: false});
            }
        }
    }

    checkRightMenuPosition(currentY) {// 与上次状态不同才更新
        if (currentY > this.state.finalProperties.articleUIChangeLimitY) {
            if (!this.state.rightMenu_NeedChange) {
                this.setState({rightMenu_NeedChange: true});
            }
        } else {
            if (this.state.rightMenu_NeedChange) {
                this.setState({rightMenu_NeedChange: false});
            }
        }
    }
}

export default withStyles(styles)(BrowseContainer);