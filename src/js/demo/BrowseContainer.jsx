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
import HW_Menu from "../component/HW_Menu.jsx";
import MarkdownHelper from "../utils/MarkdownHelper.jsx";
import WindowsScrollHelper from "../utils/WindowsScrollHelper.jsx";
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
            mainTheme: this.StyleHelper.getLightTheme_Black_Purple(),
            catalog_Hide: true,
            bgm_Stop: false,
            article_Catalog_NeedChange: false,
            rightMenu_NeedChange: false,
            WindowsScrollHelper: new WindowsScrollHelper()
        }
        console.log("constructor----------");
        // console.log(JSON.stringify(props));
    }

    componentWillMount() {
        console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate----------");
        if (window.innerWidth < 768) {
            nextState.catalog_Hide = true;
        }
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextState:" + JSON.stringify(nextState));
        // console.log("nextContext:" + JSON.stringify(nextContext));
        // if (this.state.article_Catalog_NeedChange == nextState.article_Catalog_NeedChange || this.state.rightMenu_NeedChange == nextState.rightMenu_NeedChange) {// 需要最小触发时间
        //     return false;
        // }
        return true;
    }

    freshArticle() {
        MarkdownHelper.formatToHtml({
            content: this.props.article.content,
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
                                    }} src="//music.163.com/outchain/player?type=2&id=571541787&auto=1&height=66">
                            </iframe>
                        </Grid>
                        <Grid id="article" item xs={12} container spacing={0} justify="center">
                            {this.renderArticleCatLog(this.state.catalog_Hide)}
                            {this.renderMain(this.state.catalog_Hide)}
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

    renderArticleTitle({title, lastUpdateTs}) {
        return (
            <Grid item xs={12} container direction="row" justify="flex-start" alignItems="baseline">
                <Hidden mdDown>
                    <Grid id="title" className={this.props.classes.articleTitle} item xs={12}>{title}</Grid>
                </Hidden>
                <Hidden lgUp>
                    <div id="title" className={this.props.classes.articleTitle_Phone}>{title}</div>
                </Hidden>
                <Grid id="articleTags" className={this.props.classes.tag_Box} item xs={12} container>
                    <Chip className={this.props.classes.tag} clickable label="MD 快速入门" color="secondary"
                          avatar={<Avatar className={this.props.classes.tag_Avatar}
                                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535520657529&di=78d823beb3585733d9d56375fb5d7975&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F42%2F83574716ee2ac08.jpg"/>}/>
                    <Chip className={this.props.classes.tag} clickable label="写作" color="secondary"
                          avatar={<Avatar className={this.props.classes.tag_Avatar}
                                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535520657529&di=78d823beb3585733d9d56375fb5d7975&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F42%2F83574716ee2ac08.jpg"/>}/>
                    <Chip className={this.props.classes.tag} clickable label="搞事情" color="secondary"
                          avatar={<Avatar className={this.props.classes.tag_Avatar}
                                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535520657529&di=78d823beb3585733d9d56375fb5d7975&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F42%2F83574716ee2ac08.jpg"/>}/>
                </Grid>
                <Grid id="articleInfo" item xs={12} className={this.props.classes.articleInfo} container direction="row"
                      justify="flex-start" alignItems="baseline">
                    <Grid item xs={12} lg={4}>
                        <span id="articlePlates">
                            {"技术"}
                        </span>
                        <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                        <span id="articlePlates" style={{marginLeft: "5px"}}>
                            {"软件使用"}
                        </span>
                        <Tooltip title={"最后修改日期"}>
                            <span id="articleDate" style={{marginLeft: "20px"}}>
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {this.TimeHelper.formatTimeStampToString({
                                    target: lastUpdateTs,
                                    type: "yyyy-mm-dd"
                                })}
                            </span>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Tooltip title={"字数统计"}>
                        <span id="articleWordCount">
                            <EditIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            约&nbsp;{1500}&nbsp;字
                        </span>
                        </Tooltip>
                        <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {"1k以内"}
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
                    <Tooltip title={"毕竟口头说不许转载也没多大约束力，上版权印之类的也很麻烦 (〜￣△￣)〜"}>
                        <Grid item xs={12} className={"autoWrap"} style={{lineHeight: "20px"}}>
                            版权声明：本文为 Xavier 原创文章，允许转载，请声明来源---
                            {window.location.href}
                        </Grid>
                    </Tooltip>
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

    renderMain(catalogHide) {
        return (
            <Grid id="article_Main" item xs={12} sm={catalogHide ? 12 : 10} container spacing={0} justify="center"
                  style={{minHeight: window.innerHeight - this.state.finalProperties.topMenuBarHeight}}>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} container spacing={0} justify="center">
                    {this.renderArticleTitle({title: "MD 语法样例，标题要长，这样够长了吗？", lastUpdateTs: 1535472165000})}
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
        console.log("componentDidMount----------");
        console.log("");
        this.state.WindowsScrollHelper.addCallback("修正目录图钉", this.checkCatalogPosition.bind(this));
        this.state.WindowsScrollHelper.addCallback("修正右侧菜单图钉", this.checkRightMenuPosition.bind(this));
        this.state.WindowsScrollHelper.start();
        this.freshArticle();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        // console.log("prevProps:" + JSON.stringify(prevProps));
        // console.log("prevState:" + JSON.stringify(prevState));
        // console.log("snapshot:" + JSON.stringify(snapshot));
        // this.freshArticle(!this.state.catalog_Hide);
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }

    catalogTrigger() {
        let prevState = this.state.catalog_Hide;
        if (prevState) {
            this.setState({catalog_Hide: false});
        } else {
            this.setState({catalog_Hide: true});
        }
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