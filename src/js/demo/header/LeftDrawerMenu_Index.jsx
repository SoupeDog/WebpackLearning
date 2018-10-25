import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import classNames from 'classnames';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from "@material-ui/core/es/Divider/Divider";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';

import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Grid from "@material-ui/core/es/Grid/Grid";
import gitHubLog from "../../../img/gitHubLogo.png";
import csdnLogo from "../../../img/csdnLogo.png";
import CallBackViewHelper from "../../utils/CallBackViewHelper.jsx";
import {withStyles} from "@material-ui/core/styles/index";

const drawerWidth = 240;
const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    }
});

class LeftDrawerMenu_Index extends React.Component {

    constructor(props) {
        super(props);
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
                msg: "本站前端基于 React 、Material-UI、Editor.md 开发，后端基于 Spring boot 全家桶开发，已在我的 github 个人仓库开源。目标使用场景为 PC ，对手机端提供少数功能，平板将被视为手机端。本站全部素材图片来源于网络，若侵犯了您的权益，请联系 xavierpe@qq.com 以便及时删除侵权图片。",
                cancelCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                },
                ensureCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                }
            });
        }.bind(this);
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.open == nextProps.open) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(this.props.classes.drawerPaper, !this.props.open && this.props.classes.drawerPaperClose),
                }}
                open={this.props.open}
            >
                <div className={this.props.classes.toolbar}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        {styles.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem>
                        {this.props.open ?
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={0}
                            >
                                <Grid item xs={12}>
                                    <Tooltip title="Xavier" placement="right" key={"MyHeadIcon"}>
                                        <Avatar
                                            className={"pointer " + (this.props.open ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                                            src="https://s1.ax2x.com/2018/10/25/5XGD36.png"/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={12} style={{
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
                                        <Avatar className="pointer linkIcon" src={gitHubLog}
                                                onClick={() => {
                                                    window.open("https://github.com/SoupeDog");
                                                }
                                                }/>
                                    </Tooltip>
                                </Grid>
                                <Grid item xs={3}>
                                    <Tooltip title="CSDN" placement="right">
                                        <Avatar className="pointer linkIcon" src={csdnLogo} onClick={() => {
                                            window.open("https://blog.csdn.net/u014430366");
                                        }
                                        }/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            : <ListItemIcon key={"XavierHeadIcon"}>
                                <Tooltip title="Xavier" placement="right" key={"MyHeadIcon"}>
                                    <Avatar
                                        className={"pointer " + (this.props.open ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                                        src="https://s1.ax2x.com/2018/10/25/5XGD36.png"/>
                                </Tooltip>
                            </ListItemIcon>
                        }
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
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "LeftDrawerMenu_Index", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "LeftDrawerMenu_Index", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(LeftDrawerMenu_Index);