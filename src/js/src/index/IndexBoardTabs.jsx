import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import PageMenu from "../PageMenu.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Badge from "@material-ui/core/Badge/Badge";
import Paper from "@material-ui/core/Paper/Paper";
import SingleBoardView from "./SingleBoardView.jsx";
import SwipeableViews from "react-swipeable-views";

class IndexBoardTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            defaultPageSize: 5,
            currentBoardIndex: 0,
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
            allBoardSummary: new Map()
        };
        this.swipeableViewsChangeIndex = function (nextIndex, prevIndex) {
            this.setState({currentBoardIndex: nextIndex});
        }.bind(this);
        this.changeCurrentBoard = function (event, boardId) {
            if (this.state.currentBoardIndex == boardId) {
                return;
            }
            this.setState({
                currentBoardIndex: boardId
            });
        }.bind(this);
        this.changeAllBoardSummary = function (boardId, singleBoardSummary) {
            let currentAllBoardSummary = this.state.allBoardSummary;
            currentAllBoardSummary.set(boardId, singleBoardSummary);
            this.setState({
                allBoardSummary: currentAllBoardSummary
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
            <div>
                {this.renderTabs()}
                {this.renderBoardView()}
            </div>
        );
    }

    renderTabs() {
        return (
            <AppBar position="static" color="default">
                <Tabs
                    value={this.state.currentBoardIndex}
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
                                } key={boardItem.boardId + "_tab"} style={{minWidth: "120px"}}/>
                            )
                        })
                    }
                    <Tab label="句子收藏"/>
                    <Tab label="最新动态"/>
                </Tabs>
            </AppBar>
        );
    }

    renderBoardView() {
        return (
            <SwipeableViews
                index={this.state.currentBoardIndex}
                onChangeIndex={this.swipeableViewsChangeIndex}
            >
                {
                    this.state.boardList.map((boardItem) => {
                        return (
                            <Typography key={boardItem.boardId + "_view"} align={"center"} component={"div"}>
                                <SingleBoardView boardId={boardItem.boardId}/>
                            </Typography>
                        )
                    })
                }
                <Typography align={"center"}><br/>暂未提供该功能 句子搜藏</Typography>
                <Typography align={"center"}><br/>暂未提供该功能 最新动态</Typography>
            </SwipeableViews>
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