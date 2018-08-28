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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Hidden from "@material-ui/core/es/Hidden/Hidden";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


const styles = theme => ({});


class BrowseContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            callbackTheme: this.StyleHelper.getLightTheme_Blue_Pink(),
            catalog_Hide: true,
            bgm_Stop: false,
            article_Catalog_NeedChange: false,
            rightMenu_NeedChange: true,
            WindowsScrollHelper: new WindowsScrollHelper()
        }
        console.log("constructor----------");
        // console.log(JSON.stringify(props));
    }

    // 初始化子组件
    initCallBackView(CallBackView) {
        this.CallBackView = CallBackView;
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

    updateState(data) {
        this.setState(data);
    }

    freshArticle() {
        MarkdownHelper.formatToHtml({
            text: this.props.article.content,
            id: "article_Content",
            catalogId: "catLogSource"
        });
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.state.callbackTheme}>
                    <CallBackView initCallBackView={this.initCallBackView.bind(this)}/>
                    <HW_Menu WindowsScrollHelper={this.state.WindowsScrollHelper}
                             updateState={this.updateState.bind(this)}/>
                    <div id="top_BackgroundImg"></div>
                    <Grid container spacing={0} justify="center">
                        <Grid id="bgm_Player" item xs={12} style={{
                            backgroundColor: "#333"
                        }}>
                            <iframe name="wy_music"
                                    style={{
                                        margin: 0,
                                        border: "0",
                                        padding: "0",
                                        width: "100%",
                                        height: "80px"
                                    }} src="//music.163.com/outchain/player?type=2&id=571541787&auto=0&height=66">
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
                <Hidden only="xs">
                    <Grid item xs={2}>
                        <div id="article_Catalog" className="hyggeWriter_Markdown_Catalog" style={{
                            width: this.state.article_Catalog_NeedChange ? "16.66666%" : "100%",
                            position: this.state.article_Catalog_NeedChange ? "fixed" : "static",
                            top: "60px",
                            height: (window.innerHeight - 60) + "px",
                        }} dangerouslySetInnerHTML={{__html: $("#catLogSource").html()}}>
                        </div>
                    </Grid>
                </Hidden>
            );
        }
    }

    renderMain(catalogHide) {
        return (
            <Grid id="article_Main" item xs={12} sm={catalogHide ? 12 : 10} container spacing={0} justify="center">
                <Grid item xs={1}></Grid>
                <Grid item xs={10} container spacing={0} justify="center">
                    <div id="article_Content" className="hyggeWriter_Markdown_Reader">
                    </div>
                </Grid>
                <Grid item xs={1} container spacing={0} direction="column" justify="flex-start" alignItems="center">
                    <Hidden only="xs">
                        <div id="article_RightMenu" style={{
                            position: this.state.rightMenu_NeedChange ? "fixed" : "static",
                            marginTop: this.state.rightMenu_NeedChange ? "0px" : "400px"
                        }}>
                            <Grid item xs={12} container spacing={0} direction="column" justify="flex-start">
                                <Grid item>
                                    <Tooltip title="目录" placement="left">
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

    checkCatalogPosition(currentY) {
        let targetHigh = $("#top_BackgroundImg").height() + $("#bgm_Player").height();
        if (currentY > targetHigh) {
            if (!this.state.article_Catalog_NeedChange) {
                this.setState({article_Catalog_NeedChange: true});
            }
        } else {
            if (this.state.article_Catalog_NeedChange) {
                this.setState({article_Catalog_NeedChange: false});
            }
        }
    }

    checkRightMenuPosition(currentY) {
        let targetHigh = $("#top_BackgroundImg").height() + $("#bgm_Player").height();
        if (currentY > targetHigh) {
            this.setState({rightMenu_NeedChange: true});
        } else {
            this.setState({rightMenu_NeedChange: false});
        }
    }
}

export default withStyles(styles)(BrowseContainer);