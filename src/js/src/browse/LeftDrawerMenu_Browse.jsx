import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import Grid from "@material-ui/core/Grid/Grid";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import PageJumpingOperator from "../api/PageJumpingOperator.jsx";

class LeftDrawerMenu_Browse extends React.Component {

    constructor(props) {
        super(props);
        this.friendsLinksButtonClick = function () {
            this.props.closeSwipeableDrawer();
            CallBackViewHelper.call_LightTip({
                type: "success",
                vertical: "top",
                horizontal: "center",
                msg: "暂时还没有，是谁在期待着一场 PY 交易呢~"
            });
        }.bind(this);
        this.aboutButtonClick = function () {
            this.props.closeSwipeableDrawer();
            CallBackViewHelper.call_Dialog_Conform({
                isOpen: true,
                title: "一个兴趣使然的博客站",
                scroll: "body",
                msg: "本站前端基于 React 、Material-UI、Editor.md 开发，后端基于 Spring boot 全家桶开发，已在我的 github 个人仓库开源。目标使用场景为 PC ，对手机端提供少数功能，平板将被视为手机端。本站全部素材图片来源于网络，若侵犯了您的权益，请联系 xavierpe@qq.com 以便及时删除侵权图片。",
                cancelCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                },
                ensureCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                }
            });
        }.bind(this);
        this.goToHomePage=function(){
            PageJumpingOperator.goToHomePage();
        }.bind(this);
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.swipeableDrawerIsOpen == nextProps.swipeableDrawerIsOpen) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <SwipeableDrawer
                open={this.props.swipeableDrawerIsOpen}
                onClose={this.props.closeSwipeableDrawer}
                onOpen={this.props.openSwipeableDrawer}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <List>
                            <ListItem button onClick={
                                this.goToHomePage
                            }>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="主页" />
                            </ListItem>
                            <Divider/>
                            <ListItem button onClick={this.friendsLinksButtonClick}>
                                <ListItemIcon>
                                    <LinkIcon/>
                                </ListItemIcon>
                                <ListItemText primary="友链"/>
                            </ListItem>
                            <Divider light/>
                            <ListItem button onClick={this.aboutButtonClick}>
                                <ListItemIcon>
                                    <LiveHelpIcon/>
                                </ListItemIcon>
                                <ListItemText primary="关于"/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </SwipeableDrawer>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Browse", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "LeftDrawerMenu_Browse", msg: "componentWillUnmount----------"});
    }
}

export default LeftDrawerMenu_Browse;