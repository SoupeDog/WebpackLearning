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


import Paper from "@material-ui/core/es/Paper/Paper";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Grid from "@material-ui/core/es/Grid/Grid";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import SwipeableViews from 'react-swipeable-views';
import ArticleSummaryItem from "./ArticleSummaryItem.jsx";
import APIOperator_Board from "./APIOperator_Board.jsx";


import HomeIcon from '@material-ui/icons/Home';
import Badge from "@material-ui/core/es/Badge/Badge";


const styles = theme => ({});

class Index_Phone extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            headers: {
                uId: "U00000000",
                token: "0",
                scope: "web",
                secretKey: this.URLHelper.getQueryString("secretKey")
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
        return true;
    }

    renderAPPBar() {
        return (
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color="inherit">
                        <HomeIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        我的小宅子
                    </Typography>
                    {/*<Button color="secondary">登录</Button>*/}
                </Toolbar>
            </AppBar>
        )
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
                    scrollable
                    scrollButtons="auto"
                >
                    {this.renderArticleList_TagItem(allBoardInfo)}
                    <Tab label="N 日一句"/>
                    <Tab label="搜索结果"/>
                </Tabs>
                <SwipeableViews
                    index={currentBoard}
                >
                    {this.renderArticleList_TagContainer(allBoardInfo, allSummary)}
                    <Typography align={"center"}><br/>暂未提供该功能</Typography>
                    <Typography align={"center"}><br/>暂未提供该功能</Typography>
                </SwipeableViews>
            </MuiThemeProvider>
        )
    }

    renderArticleList_TagItem(allBoard) {
        return (
            allBoard.map((board, index) => {
                return (
                    <Tab label={
                        <Badge color="secondary"
                               badgeContent={this.state.allSummary[board.boardId] == null ? "?" : this.state.allSummary[board.boardId].totalCount}
                               style={{paddingRight: "20px"}}>
                            {board.boardName}
                        </Badge>
                    } key={index} id={board.boardId}/>
                )
            })
        )
    }

    renderArticleList_TagContainer(allBoardInfo, allSummary) {
        return (
            allBoardInfo.map((boardInfo, index) => {
                return (
                    <Typography key={index} style={{padding: 24}}>
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
                            ts={articleSummary.ts}
                            properties={articleSummary.properties}
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
                        <Grid item xs={12}>
                            <Paper id="main" elevation={12}>
                                {this.renderAPPBar()}
                                <div id="main_Center" className="floatLeft"
                                     style={{width: "100%", marginTop: "60px"}}>
                                    {this.renderArticleList(this.state.allBoardInfo, this.state.allSummary, this.state.currentBoard)}
                                </div>
                            </Paper>
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
        this.LogHelper.info({msg: "componentDidMount----------"});
        this.LogHelper.debug({msg: ""});
        this.freshAllBoard();
        this.CallBackView.call_Dialog_Conform({
            isOpen: true,
            title: "本站须知",
            ensureCallback: () => {
            },
            cancelCallback: () => {
            },
            msg: "检测到您可能使用了移动触屏设备访问，本站原定使用场景为 PC 端，适配移动触屏设备的版本功能已被阉割，推荐使用 PC 访问。"
        });
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
}

export default withStyles(styles)(Index_Phone);