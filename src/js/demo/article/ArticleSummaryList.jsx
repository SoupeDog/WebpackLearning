import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import Tabs from "@material-ui/core/es/Tabs/Tabs";
import Tab from "@material-ui/core/es/Tab/Tab";
import SwipeableViews from 'react-swipeable-views';
import Typography from "@material-ui/core/es/Typography/Typography";
import Badge from "@material-ui/core/es/Badge/Badge";
import ArticleSummaryItem from "./ArticleSummaryItem.jsx";


const response = {
    type: 1,
    code: 200,
    msg: null,
    data: {
        resultSet: [
            {
                articleId: "39d0f40cfdea4770a34679aa4a7c4e8b",
                boardName: "技术",
                title: "初始化一台云服务器",
                articleCategoryId: "f53577ef61d64e73a4d7e5389476b89f",
                articleCategoryName: "运维",
                uId: "U00000001",
                statementId: "",
                summary: "简单记录我初次搭建云服务器的过程",
                content: null,
                wordCount: 3860,
                articleRetainType: "DEFAULT",
                articlePath: null,
                pageViews: 126,
                properties: "{\"image\":\"https://s1.ax2x.com/2018/10/24/5XWiJq.jpg\"}",
                legal_Flag: true,
                lastUpdateTs: 1540535284791,
                ts: 1537787367460
            },
            {
                articleId: "501a892e80604e75ac8b0ab4e10f1806",
                boardName: "技术",
                title: "携程 Apollo 配置中心快速入门及搭建",
                articleCategoryId: "f53577ef61d64e73a4d7e5389476b89f",
                articleCategoryName: "运维",
                uId: "U00000001",
                statementId: "",
                summary: "携程 Apollo 配置中心快速入门及搭建",
                content: null,
                wordCount: 4933,
                articleRetainType: "DEFAULT",
                articlePath: null,
                pageViews: 242,
                properties: "{\"image\":\"https://s1.ax2x.com/2018/10/24/5XWiJq.jpg\"}",
                legal_Flag: true,
                lastUpdateTs: 1540484793772,
                ts: 1539448805119
            }
        ],
        totalCount: 2
    },
    ts: 1540535452948
};
const response2 = {
        type: 1,
        code: 200,
        msg: null,
        data: {
            resultSet: [
                {
                    articleId: "7fe06d5bdeb745aea7a5bce52167dbdf",
                    boardName: "随笔",
                    title: "为什么你应该（从现在开始就）写博客",
                    articleCategoryId: "7f050c9085ca4dae93d0830c3860c723",
                    articleCategoryName: "假装在思考",
                    uId: "U00000001",
                    statementId: "",
                    summary: "防止非技术板块空着的无事水",
                    content: null,
                    wordCount: 2777,
                    articleRetainType: "DEFAULT",
                    articlePath: null,
                    pageViews: 362,
                    properties: "{\"bgm\":\"https://music.163.com/outchain/player?type=2&id=34014166&auto=1&height=66\",\"image\":\"https://s1.ax2x.com/2018/10/24/5XWUJa.jpg\"}",
                    legal_Flag: true,
                    lastUpdateTs: 1540486095998,
                    ts: 1538739132896
                }
            ],
            "totalCount": 1
        },
        "ts": 1540535300756
    };

const map = new Map();
map.set("0ef526a3140a46cb94d458f7d506cfe3", response);
map.set("744ed9f224d74827a12db8ec97b6975b", response2);

class ArticleSummaryList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedTabIndex: 0,
            allArticleSummary: map
        };
        this.handleFocusedTabIndexChange = function (event, nextIndex) {
            this.setState({focusedTabIndex: nextIndex});
        }.bind(this);
        this.swipeableViewsChangeIndex = function (nextIndex, prevIndex) {
            this.handleFocusedTabIndexChange(event, nextIndex);
        }.bind(this);
        LogHelper.info({className: "ArticleSummaryList", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleSummaryList", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        if (this.props.boardInfoList != null) {
            return (
                <div style={{width: "100%", height: "600px"}}>
                    <div style={{margin: "0px 16px"}}>
                        <Tabs
                            value={this.state.focusedTabIndex}
                            onChange={this.handleFocusedTabIndexChange}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            scrollable
                            scrollButtons="auto"
                        >
                            {
                                this.props.boardInfoList.map((boardItem) => {
                                    return (
                                        <Tab label={
                                            <Badge color="secondary"
                                                   badgeContent={this.state.allArticleSummary.get(boardItem.boardId) == null ? "?" : this.state.allArticleSummary.get(boardItem.boardId).data.totalCount}
                                                   style={{paddingRight: "20px"}}>
                                                {boardItem.boardName}
                                            </Badge>
                                        } key={boardItem.boardId} id={boardItem.boardId} style={{minWidth: "120px"}}/>
                                    )
                                })
                            }
                            <Tab label="N 日一句" style={{minWidth: "120px"}}/>
                            <Tab label="搜索结果" style={{minWidth: "120px"}}/>
                        </Tabs>
                        <SwipeableViews
                            index={this.state.focusedTabIndex}
                            onChangeIndex={this.swipeableViewsChangeIndex}
                        >
                            {
                                this.props.boardInfoList.map((boardItem) => {
                                    return (
                                        <Typography align={"center"} component={"div"}
                                                    key={boardItem.boardId}>
                                            {this.state.allArticleSummary.get(boardItem.boardId).data.resultSet.map((articleSummary) => {
                                                return (
                                                    <ArticleSummaryItem articleSummary={articleSummary}
                                                                        key={articleSummary.articleId}/>
                                                )
                                            })}
                                            <div style={{width: "100%", minHeight: "40px"}}>
                                                <div id={"pageMenu_" + boardItem.boardId} className="pageControl"></div>
                                            </div>
                                            </Typography>
                                    );
                                })
                            }
                            <Typography align={"center"}><br/>暂未提供该功能 N 日一句</Typography>
                            <Typography align={"center"}><br/>暂未提供该功能 搜索结果</Typography>
                        </SwipeableViews>
                    </div>
                </div>
            );
        } else {
            return (null);
        }
    }

    componentDidMount() {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentDidMount----------"});
        this.props.boardInfoList.map((boardItem) => {
            $("#pageMenu_" + boardItem.boardId).pagination({
                coping: false,
                jump: false,
                prevContent: '上一页',
                nextContent: '下一页',
                current: 1,
                count: 1,
                pageCount: Math.ceil(this.state.allArticleSummary.get(boardItem.boardId).data.totalCount/1),
                activeCls: 'active',
                callback: function (api) {
//
                }
            });
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryList", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryList", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleSummaryList", msg: "componentWillUnmount----------"});
    }
}

export default ArticleSummaryList;