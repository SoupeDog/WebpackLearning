import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import Drawer from "@material-ui/core/Drawer/Drawer";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Grid from "@material-ui/core/Grid/Grid";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import gitHubLog from "../../../img/gitHubLogo.png";
import csdnLogo from "../../../img/csdnLogo.png";
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    headIcon: {
        margin: "0 auto",
        width: "24px",
        height: "24px"
    },
    headIcon_L: {
        clear: "both",
        margin: "0 auto",
        width: "80px",
        height: "80px"
    },
    headInfoHide: {
        display: "none"
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});




class IndexLeftMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.friendsLinksButtonClick = function () {
            CallBackViewHelper.call_LightTip({
                type: "success",
                vertical: "top",
                horizontal: "center",
                msg: "暂时还没有，是谁在期待着一场 PY 交易呢~"
            });
        }.bind(this);
        this.aboutButtonClick = function () {
            CallBackViewHelper.call_Dialog_Conform({
                isOpen: true,
                title: "一个兴趣使然的博客站",
                scroll: "body",
                msg: "本站前端基于 React 、Material-UI、Editor.md 开发，后端基于 Spring boot 全家桶开发，已在我的 github 个人仓库开源。目标使用场景为 PC ，对手机端提供少数功能，平板将被视为手机端。本站全部音频、图片素材来源于网络，若侵犯了您的权益，请联系 xavierpe@qq.com 以便及时删除侵权素材。",
                cancelCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                },
                ensureCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                }
            });
        }.bind(this);
        LogHelper.info({className: "IndexLeftMenu", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexLeftMenu", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexLeftMenu", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexLeftMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexLeftMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexLeftMenu", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexLeftMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexLeftMenu", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexLeftMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <Drawer
                variant="permanent"
                className={clsx(this.props.classes.drawer, {
                    [this.props.classes.drawerOpen]: this.props.leftMenuIsOpen,
                    [this.props.classes.drawerClose]: !this.props.leftMenuIsOpen,
                })}
                classes={{
                    paper: clsx({
                        [this.props.classes.drawerOpen]: this.props.leftMenuIsOpen,
                        [this.props.classes.drawerClose]: !this.props.leftMenuIsOpen,
                    }),
                }}
                open={this.props.leftMenuIsOpen}
            >
                <div className={this.props.classes.toolbar}>
                    <IconButton
                        onClick={this.props.handleDrawerClose}
                    >
                        {!this.props.leftMenuIsOpen ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Grid item xs={12}>
                                <Tooltip title="Xavier" placement="right">
                                    <Avatar
                                        className={clsx("pointer", {
                                            [this.props.classes.headIcon_L]: this.props.leftMenuIsOpen,
                                            [this.props.classes.headIcon]: !this.props.leftMenuIsOpen,
                                        })}
                                        src="https://www.xavierwang.cn/images/47454e58e7f249c3968524d25a6c9c7a_M.png"/>
                                </Tooltip>
                            </Grid>
                            <Grid className={clsx({
                                [this.props.classes.headInfoHide]: !this.props.leftMenuIsOpen
                            })} item xs={12} style={{
                                fontSize: "12px",
                                lineHeight: "30px",
                                color: "#757575"
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
                            </Grid>
                            <Grid item xs={3}>
                                <Tooltip title="GitHub" placement="right">
                                    <Avatar className={clsx("pointer", "linkIcon", {
                                        [this.props.classes.headInfoHide]: !this.props.leftMenuIsOpen
                                    })} src={gitHubLog}
                                            onClick={() => {
                                                window.open("https://github.com/SoupeDog");
                                            }
                                            }/>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={3}>
                                <Tooltip title="CSDN" placement="right">
                                    <Avatar className={clsx("pointer", "linkIcon", {
                                        [this.props.classes.headInfoHide]: !this.props.leftMenuIsOpen
                                    })} src={csdnLogo} onClick={() => {
                                        window.open("https://blog.csdn.net/u014430366");
                                    }
                                    }/>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider/>
                <List>
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
            </Drawer>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexLeftMenu", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexLeftMenu", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexLeftMenu", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexLeftMenu", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexLeftMenu", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexLeftMenu", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexLeftMenu);