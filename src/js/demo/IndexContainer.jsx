import React from "react";
import ReactDOM from "react-dom";

import gitHubLog from "../../img/gitHubLogo.png";
import csdnLogo from "../../img/csdnLogo.png";

import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";

import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from '@material-ui/core/styles';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


import Button from "@material-ui/core/es/Button/Button";
import Paper from "@material-ui/core/es/Paper/Paper";
import Hidden from "@material-ui/core/es/Hidden/Hidden";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Divider from "@material-ui/core/es/Divider/Divider";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Grid from "@material-ui/core/es/Grid/Grid";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import SwipeableViews from 'react-swipeable-views';
import ArticleSummaryItem from "./ArticleSummaryItem.jsx";
import APIOperator_Board from "./APIOperator_Board.jsx";
import BottomNavigation from "@material-ui/core/es/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/es/BottomNavigationAction/BottomNavigationAction";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import ChatIcon from '@material-ui/icons/Chat';

import WhatshotIcon from '@material-ui/icons/Whatshot';

const styles = theme => ({});


class IndexContainer extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            headers: {
                uId: "U00000000",
                token: "0",
                scope: "web",
                secretKey: ""
            },
            currentPageSize: 5,
            currentPage: 1,
            leftMenu_WideMode: true,
            currentTheme: this.StyleHelper.getLightTheme_Black_Purple(),
            allBoardInfo: [],
            allSummary: {},
            hotArticle: [{
                title: "如何理解人的本质就是\"复读机\"？",
                pageViews: 10
            }, {
                title: "EditorMD 效果展示",
                pageViews: 10
            }],
            currentBoard: 0,
            currentRightMenu: 0
        }

        // console.log("constructor----------");
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
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextState:" + JSON.stringify(nextState));
        // console.log("nextContext:" + JSON.stringify(nextContext));
        return true;
    }

    renderAPPBar_Menu(leftMenu_WideMode) {
        if (leftMenu_WideMode) {
            return (
                <IconButton color="inherit"
                            className={this.state.leftMenu_WideMode ? "appBarLeftMenu_Wide" : "appBarLeftMenu"}
                            onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                    <ChevronLeftIcon/>
                </IconButton>
            );
        } else {
            return (
                <IconButton color="inherit"
                            className={this.state.leftMenu_WideMode ? "appBarLeftMenu_Wide" : "appBarLeftMenu"}
                            onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                    <ChevronRightIcon/>
                </IconButton>
            );
        }
    }

    renderAPPBar(isWideMod) {
        return (
            <div>
                <Hidden xsDown>
                    <AppBar id="appBar" position="fixed" style={{height: "64px", width: "83.33333%", left: "8.33333%"}}>
                        <Toolbar>
                            {this.renderAPPBar_Menu(isWideMod)}
                            <Typography variant="title" color="inherit"
                                        className={isWideMod ? "appBarTitle_Wide" : "appBarTitle"}
                                        style={{marginLeft: isWideMod ? "200px" : "26px"}}>
                                Bridge for You
                            </Typography>
                            {/*<Button color="secondary">登录</Button>*/}
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <Hidden smUp>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Bridge for You
                            </Typography>
                            {/*<Button color="secondary">登录</Button>*/}
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
        )
    }

    renderLeftMenu(isWideMod) {
        if (isWideMod) {
            return (
                <div id="main_Left"
                     className={"floatLeft " + (isWideMod ? "leftMenu_Wide" : "leftMenu")}>
                    <Tooltip title="Xavier" placement="right">
                        <Avatar
                            className={"pointer " + (this.state.leftMenu_WideMode ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                            src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                    </Tooltip>
                    <div>
                        <div style={{
                            fontSize: "12px",
                            lineHeight: "30px"
                        }}>
                            <div className="textCenter clearBoth">“假装在思考的复读机”</div>
                            <div className="textCenter clearBoth">
                            </div>
                            <div className="textCenter clearBoth">
                                <EmailIcon style={{
                                    fontSize: "12px",
                                    lineHeight: "40px"
                                }}/>{"　"}xavierpe@qq.com
                            </div>
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Grid item xs={2}>
                                <Tooltip title="GitHub" placement="right">
                                    <Avatar className="pointer linkIcon" src={gitHubLog} onClick={() => {
                                        window.open("https://github.com/SoupeDog");
                                    }
                                    }/>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={2}>
                                <Tooltip title="CSDN" placement="right">
                                    <Avatar className="pointer linkIcon" src={csdnLogo} onClick={() => {
                                        window.open("https://blog.csdn.net/u014430366");
                                    }
                                    }/>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <List>
                            <ListItem button onClick={() => {
                                alert("不存在的");
                            }}>
                                <ListItemIcon>
                                    <LinkIcon/>
                                </ListItemIcon>
                                <ListItemText primary="友链"/>
                            </ListItem>
                            <Divider light/>
                            <ListItem button>
                                <ListItemIcon>
                                    <LiveHelpIcon/>
                                </ListItemIcon>
                                <ListItemText primary="关于"/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="main_Left"
                     className={"floatLeft " + (isWideMod ? "leftMenu_Wide" : "leftMenu")}>
                    <Tooltip title="Xavier" placement="right">
                        <Avatar
                            className={"pointer " + (this.state.leftMenu_WideMode ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                            src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                    </Tooltip>
                    <Tooltip title="友链" placement="right">
                        <IconButton color="inherit" onClick={() => {
                            alert("不存在的");
                        }}>
                            <LinkIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="关于" placement="right">
                        <IconButton color="inherit">
                            <LiveHelpIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }
    }

    renderRightMenu() {
        return (
            <MuiThemeProvider theme={this.StyleHelper.getLightTheme_Blue_Pink()}>
                <div id="main_Right" className="floatRight"
                     style={{
                         marginRight: "-200px",
                         width: "200px",
                         height: "inherit"
                     }}>
                    <BottomNavigation
                        value={this.state.currentRightMenu}
                        onChange={(event, value) => {
                            this.updateState({currentRightMenu: value})
                        }}
                        showLabels
                    >
                        <BottomNavigationAction label="热门" icon={<WhatshotIcon/>}/>
                        <BottomNavigationAction label="最新评论" icon={<ChatIcon/>}/>
                    </BottomNavigation>
                    {this.renderRightMenuContent(this.state.currentRightMenu)}
                </div>
            </MuiThemeProvider>
        );
    }

    renderRightMenuContent(currentRightMenuTagIndex) {
        switch (currentRightMenuTagIndex) {
            case 0:// 热门文章
                return (
                    <List>
                        {
                            this.state.hotArticle.map((hotArticleItem, index) => {
                                return (
                                    <ListItem key={index} button>
                                        <div className="hotItem">
                                            <div className="hotTitle clearBoth">
                                                {hotArticleItem.title}
                                            </div>
                                            <div className="hotMoreInfo clearBoth">
                                            <span id="articlePageViewsCount">
                                                <VisibilityIcon style={{
                                                    fontSize: "12px",
                                                    color: "#aaa",
                                                    lineHeight: "40px"
                                                }}/>&nbsp;
                                                {hotArticleItem.pageViews < 1000 ? "1k以内" : hotArticleItem.pageViews}
                                            </span>
                                                <span className="articleCommentCount" style={{marginLeft: "20px"}}>
                                        <CommentIcon style={{
                                            fontSize: "12px",
                                            color: "#aaa",
                                            lineHeight: "40px"
                                        }}/>&nbsp;
                                                    {"暂无评论"}
                                              </span>
                                            </div>
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                );
            case 1:// 最新评论
                return (
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                            </ListItemIcon>
                            <div className="commentBox">
                                <div className="commentArticleTitle autoOmit">
                                    如何理解"人的本质就是复读机"?
                                </div>
                                <div className="commentContent autoWrap">
                                    <p>
                                        {"没木有搞错"}：
                                    </p>
                                    <p style={{textIndent: "2em"}}>
                                        评论的样例，假装评论系统已完成，实际上评论模块都不存在
                                    </p>
                                </div>
                            </div>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                            </ListItemIcon>
                            <div className="commentBox">
                                <div className="commentArticleTitle autoOmit">
                                    如何理解"人的本质就是复读机"?
                                </div>
                                <div className="commentContent autoWrap">
                                    <p>
                                        {"没木有搞错"}：
                                    </p>
                                    <p style={{textIndent: "2em"}}>
                                        评论的样例，假装评论系统已完成，实际上评论模块都不存在
                                    </p>
                                </div>
                            </div>
                        </ListItem>
                    </List>
                );
        }
    }

    renderArticleList(allBoardInfo, allSummary, currentBoard) {
        return (
            <MuiThemeProvider theme={this.StyleHelper.getLightTheme_Blue_Pink()}>
                <Tabs
                    value={currentBoard}
                    onChange={this.boardTagClick.bind(this)}
                    indicatorColor="primary"
                    textColor="primary"
                    fullWidth
                >
                    {this.renderArticleList_TagItem(allBoardInfo)}
                </Tabs>
                <SwipeableViews
                    index={currentBoard}
                >
                    {this.renderArticleList_TagContainer(allBoardInfo, allSummary)}
                </SwipeableViews>
            </MuiThemeProvider>
        )
    }

    renderArticleList_TagItem(allBoard) {
        return (
            allBoard.map((board, index) => {
                return (
                    <Tab key={index} id={board.boardId} label={board.boardName}/>
                )
            })
        )
    }

    renderArticleList_TagContainer(allBoardInfo, allSummary) {
        return (
            allBoardInfo.map((boardInfo, index) => {
                return (
                    <Typography key={index} component="div" style={{padding: 24}}>
                        {this.renderArticleSummary(allSummary[boardInfo.boardId])}
                        {this.renderPageMenu(boardInfo)}
                    </Typography>
                );
            })
        )
    }

    renderPageMenu(boardInfo) {
        window.setTimeout(() => {
            this.freshPageController(boardInfo);
        }, 100);
        return (
            <div style={{width: "100%", minHeight: "40px"}}>
                <div id={"pageMenu_" + boardInfo.boardId} className="pageControl"></div>
            </div>
        );
    }

    renderArticleSummary(ArticleSummaryPageQueryResult) {
        if (ArticleSummaryPageQueryResult != null) {
            return (
                ArticleSummaryPageQueryResult.resultSet.map((articleSummary, index) => {
                    return (
                        <ArticleSummaryItem
                            key={index}
                            articleId={articleSummary.articleId}
                            boardName={articleSummary.boardName}
                            title={articleSummary.title}
                            articleCategoryName={articleSummary.articleCategoryName}
                            wordCount={articleSummary.wordCount}
                            pageViews={articleSummary.pageViews}
                            lastUpdateTs={articleSummary.lastUpdateTs}
                        />
                    );
                })
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.state.currentTheme}>
                    <CallBackView componentName={"CallBackView"} setParentNode={this.setParentNode.bind(this)}/>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid className="blank" item xs={false} sm={1}>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Paper id="main" elevation={12}>
                                {this.renderAPPBar(this.state.leftMenu_WideMode)}
                                <div
                                    className={this.state.leftMenu_WideMode ? "leftMenuContainer_Wide" : "leftMenuContainer"}>
                                    {this.renderLeftMenu(this.state.leftMenu_WideMode)}
                                    <div id="main_Center" className="floatLeft"
                                         style={{width: "100%"}}>
                                        {this.renderArticleList(this.state.allBoardInfo, this.state.allSummary, this.state.currentBoard)}
                                    </div>
                                    {this.renderRightMenu()}
                                    <div className="clearFix" style={{marginBottom: "20px"}}></div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid className="blank" item xs={false} sm={1}>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    boardTagClick(event, value) {
        this.setState({currentBoard: value});
        let queryBoardList = new Array;
        queryBoardList.push(this.state.allBoardInfo[value]);
        if (queryBoardList.length > 0) {
            this.freshSummary({boardList: queryBoardList, headers: this.state.headers});
        }
    }

    freshSummary({boardList, currentPage, currentPageSize, headers}) {
        let _react = this;
        APIOperator_Board.getSummaryOfBoard({
            boardList,
            currentPage: currentPage == null ? _react.state.currentPage : currentPage,
            pageSize: currentPageSize == null ? _react.state.currentPageSize : currentPageSize,
            headers,
            requestBefore: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let currentSummary = _react.state.allSummary;
                let boardId = _react.PropertiesHelper.arrayToString({
                    isStandard: false,
                    array: boardList,
                    targetVal: "boardId"
                });
                currentSummary[boardId] = response.data;
                _react.setState({
                    allSummary: currentSummary,
                    currentPage: (currentPage == null ? _react.state.currentPage : currentPage)
                });
            },
            finallyCallback: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(false);
            }
        });

    }

    freshAllBoard() {
        let _react = this;
        APIOperator_Board.getAllBoard({
            headers: this.state.headers,
            requestBefore: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                _react.setState({allBoardInfo: response.data});
                window.setTimeout(() => {
                    let queryBoardList = new Array;
                    queryBoardList.push(response.data[_react.state.currentBoard]);
                    // 刷新文章摘要
                    _react.freshSummary({boardList: queryBoardList, headers: _react.state.headers});
                }, 500);
            },
            finallyCallback: function () {
                _react.CallBackView.call_Loading_Linear_Unknown(false);
            }
        });
    }

    freshPageController(boardInfo) {
        let _react = this;
        if (_react.state.allSummary[boardInfo.boardId] != null) {
            let totalCount = _react.state.allSummary[boardInfo.boardId].totalCount;
            totalCount = Math.ceil(totalCount / _react.state.currentPageSize);
            if (totalCount > 0) {
                $("#pageMenu_" + boardInfo.boardId).pagination({
                    coping: false,
                    jump: false,
                    prevContent: '上一页',
                    nextContent: '下一页',
                    current: _react.state.currentPage,
                    count: 2,
                    pageCount: totalCount,
                    activeCls: 'active',
                    callback: function (api) {
                        alert(api.getCurrent())
                        let boardList = new Array();
                        boardList.push(boardInfo);
                        _react.freshSummary({
                            boardList: boardList,
                            headers: _react.state.headers,
                            currentPage: api.getCurrent()
                        });
                    }
                });
            }
        }
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
        this.freshAllBoard();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        // console.log("prevProps:" + JSON.stringify(prevProps));
        // console.log("prevState:" + JSON.stringify(prevState));
        // console.log("snapshot:" + JSON.stringify(snapshot));
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }
}

export default withStyles(styles)(IndexContainer);