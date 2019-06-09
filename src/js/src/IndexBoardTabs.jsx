import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import PageMenu from "./PageMenu.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Badge from "@material-ui/core/Badge/Badge";
import Paper from "@material-ui/core/Paper/Paper";
import SingleBoardView from "./SingleBoardView.jsx";

class IndexBoardTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            defaultPageSize: 5,
            currentBoardId: 0,
            boardList: [
                {
                    boardId: "0ef526a3140a46cb94d458f7d506cfe3",
                    uId: "U00000001",
                    boardName: "技术",
                    lastUpdateTs: 1537782719374,
                    ts: 1537782719374
                },
                {
                    boardId: "744ed9f224d74827a12db8ec97b6975b",
                    uId: "U00000001",
                    boardName: "非技术",
                    lastUpdateTs: 1537782729174,
                    ts: 1537782729174
                }
            ],
            articleSummaryInfo: {
                "type": 1,
                "code": 200.0,
                "msg": null,
                "data": {
                    "resultSet": [{
                        "articleId": "e9e1d8fcbcb24fdab3a8e1d8c2fc65c9",
                        "uId": "U00000001",
                        "articleCategoryId": null,
                        "title": "Java 中锁的总结",
                        "boardName": "技术",
                        "articleCategoryPath": [{
                            "articleCategoryId": "7f0e0ef4ee003180aafeea09462e8dec",
                            "articleCategoryName": "程序员"
                        }, {
                            "articleCategoryId": "cbf6912b977d34809e1acca515c5e06e",
                            "articleCategoryName": "后端"
                        }, {
                            "articleCategoryId": "6f907edfaa5e376282a72b6b380c9da4",
                            "articleCategoryName": "Java"
                        }, {
                            "articleCategoryId": "309737c845123481860737df74856aea",
                            "articleCategoryName": "并发"
                        }
                        ],
                        "summary": "当你对锁一无所知时，看这个入个门就对了",
                        "wordCount": 2346,
                        "pageViews": 61,
                        "properties": "{\"image\":\"https://www.xavierwang.cn/images/9da5c6815907412a9fb55cb6b817a18c_L.jpg\"}",
                        "lastUpdateTs": 1557245446498,
                        "ts": 1550659066679
                    }, {
                        "articleId": "613ac7b88cff40eda9cecdacc9e6b590",
                        "uId": "U00000001",
                        "articleCategoryId": null,
                        "title": "JVM 内存模型",
                        "boardName": "技术",
                        "articleCategoryPath": [{
                            "articleCategoryId": "7f0e0ef4ee003180aafeea09462e8dec",
                            "articleCategoryName": "程序员"
                        }, {
                            "articleCategoryId": "cbf6912b977d34809e1acca515c5e06e",
                            "articleCategoryName": "后端"
                        }, {
                            "articleCategoryId": "6f907edfaa5e376282a72b6b380c9da4",
                            "articleCategoryName": "Java"
                        }, {
                            "articleCategoryId": "87f9b84db11e39a3bc9f8086c2fcb106",
                            "articleCategoryName": "JVM"
                        }
                        ],
                        "summary": "防止和人打招呼都不敢说自己是 Java 程序员",
                        "wordCount": 3951,
                        "pageViews": 31,
                        "properties": "{\"image\":\"https://www.xavierwang.cn/images/9da5c6815907412a9fb55cb6b817a18c_L.jpg\"}",
                        "lastUpdateTs": 1552224021317,
                        "ts": 1548158385426
                    }, {
                        "articleId": "545195cef17b42b8a27597b90d0dc8bf",
                        "uId": "U00000001",
                        "articleCategoryId": null,
                        "title": "SQL 语句注入",
                        "boardName": "技术",
                        "articleCategoryPath": [{
                            "articleCategoryId": "7f0e0ef4ee003180aafeea09462e8dec",
                            "articleCategoryName": "程序员"
                        }, {
                            "articleCategoryId": "d79bd9de94b537f596a6adec959be41f",
                            "articleCategoryName": "数据库"
                        }, {
                            "articleCategoryId": "fb614c4419e743ed9503136417e29d68",
                            "articleCategoryName": "Mysql"
                        }
                        ],
                        "summary": "SQL 语句注入那些事儿",
                        "wordCount": 1226,
                        "pageViews": 34,
                        "properties": "{\"image\":\"https://www.xavierwang.cn/images/36270685462f4b6ea9ad2fde3ad7a73d_L.jpg\"}",
                        "lastUpdateTs": 1554774405420,
                        "ts": 1546189650237
                    }, {
                        "articleId": "dec2c90abebf4759aeb7085c2f4325d3",
                        "uId": "U00000001",
                        "articleCategoryId": null,
                        "title": " Socket 实现简单的 Http 请求",
                        "boardName": "技术",
                        "articleCategoryPath": [{
                            "articleCategoryId": "d3e1f8d742743f62baa093f02c3bdb13",
                            "articleCategoryName": "计算机网络"
                        }
                        ],
                        "summary": "快速入门 Http 协议？Socket 写次 Http 请求就完事儿了！",
                        "wordCount": 3219,
                        "pageViews": 19,
                        "properties": "{\"image\":\"https://s1.ax2x.com/2018/10/24/5XWiJq.jpg\"}",
                        "lastUpdateTs": 1552122667400,
                        "ts": 1546013754680
                    }, {
                        "articleId": "ff7ad5b41e474bf9a2613c87591e2119",
                        "uId": "U00000001",
                        "articleCategoryId": null,
                        "title": "Java 多线程快速入门",
                        "boardName": "技术",
                        "articleCategoryPath": [{
                            "articleCategoryId": "7f0e0ef4ee003180aafeea09462e8dec",
                            "articleCategoryName": "程序员"
                        }, {
                            "articleCategoryId": "cbf6912b977d34809e1acca515c5e06e",
                            "articleCategoryName": "后端"
                        }, {
                            "articleCategoryId": "6f907edfaa5e376282a72b6b380c9da4",
                            "articleCategoryName": "Java"
                        }, {
                            "articleCategoryId": "309737c845123481860737df74856aea",
                            "articleCategoryName": "并发"
                        }
                        ],
                        "summary": "多线程的一次总结",
                        "wordCount": 11340,
                        "pageViews": 159,
                        "properties": "{\"image\":\"https://www.xavierwang.cn/images/9da5c6815907412a9fb55cb6b817a18c_L.jpg\"}",
                        "lastUpdateTs": 1555208450957,
                        "ts": 1542900341239
                    }
                    ],
                    "totalCount": 9
                },
                "ts": 1560046605950
            }
        };
        this.changeCurrentBoard = function (event, boardId) {
            if (this.state.currentBoardId == boardId) {
                return;
            }
            this.setState({
                currentBoardId: boardId
            });
        }.bind(this);
        LogHelper.info({className: "IndexBoardTabs", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexBoardTabs", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <Paper>
                {this.renderTabs()}
                <SingleBoardView singleBoardInfo={this.state.articleSummaryInfo}/>
            </Paper>
        );
    }

    renderTabs() {
        return (
            <AppBar position="static" color="default">
                <Tabs
                    value={this.state.currentBoardId}
                    onChange={this.changeCurrentBoard}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    scrollButtons="auto"
                >
                    {
                        this.state.boardList.map((boardItem) => {
                            return (
                                <Tab label={
                                    <Badge color="secondary"
                                           badgeContent={999}
                                           style={{paddingRight: "20px"}}>
                                        {boardItem.boardName}
                                    </Badge>
                                } key={boardItem.boardId} id={boardItem.boardId} style={{minWidth: "120px"}}/>
                            )
                        })
                    }
                    <Tab label="句子收藏"/>
                    <Tab label="最新动态"/>
                </Tabs>
            </AppBar>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexBoardTabs", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexBoardTabs", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexBoardTabs", msg: "componentWillUnmount----------"});
    }
}

export default IndexBoardTabs;