import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import BottomNavigation from "@material-ui/core/es/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/es/BottomNavigationAction/BottomNavigationAction";
import ChatIcon from '@material-ui/icons/Chat';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import StyleHelper from "../../utils/StyleHelper.jsx";
import Divider from "@material-ui/core/es/Divider/Divider";

class RightMenu_Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hotArticle: [{
                title: "如何理解人的本质就是\"复读机\"？",
                pageViews: 10
            }, {
                title: "冷、冷静下来、总之先找时光机",
                pageViews: 10
            }],
            currentRightMenu: 0
        };
        LogHelper.info({className: "RightMenu_Index", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "RightMenu_Index", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.state.currentRightMenu == nextState.currentRightMenu) {
            return false
        } else {
            return true;
        }
    }

    render() {
        return (
            <div id="main_Right" className="floatRight"
                 style={{width: "100%", height: "600px"}}>
                <BottomNavigation
                    value={this.state.currentRightMenu}
                    onChange={(event, value) => {
                        this.setState({currentRightMenu: value})
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="热门" icon={<WhatshotIcon/>}/>
                    {/*<BottomNavigationAction label="最新评论" icon={<ChatIcon/>}/>*/}
                </BottomNavigation>
                {this.renderRightMenuContent(this.state.currentRightMenu)}
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "RightMenu_Index", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillUnmount----------"});
    }

    renderRightMenuContent(currentRightMenuTagIndex) {
        switch (currentRightMenuTagIndex) {
            case 0:// 热门文章
                return (
                    <List>
                        {
                            this.state.hotArticle.map((hotArticleItem, index) => {
                                return (
                                    <div key={index}>
                                        <ListItem  button>
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
                                                    {/*<span className="articleCommentCount" style={{marginLeft: "20px"}}>*/}
                                        {/*<CommentIcon style={{*/}
                                            {/*fontSize: "12px",*/}
                                            {/*color: "#aaa",*/}
                                            {/*lineHeight: "40px"*/}
                                        {/*}}/>&nbsp;*/}
                                                        {/*{"暂无评论"}*/}
                                              {/*</span>*/}
                                                </div>
                                            </div>
                                        </ListItem>
                                        <Divider/>
                                    </div>


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
                                <Avatar src="https://s1.ax2x.com/2018/10/25/5XGD36.png"/>
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
                        <Divider/>
                        <ListItem button>
                            <ListItemIcon>
                                <Avatar src="https://s1.ax2x.com/2018/10/25/5XGD36.png"/>
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
                        <Divider/>
                    </List>
                );
        }
    }
}

export default RightMenu_Index;