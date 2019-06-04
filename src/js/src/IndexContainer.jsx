import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Divider from "@material-ui/core/Divider/Divider";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core";
import clsx from 'clsx';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';
import gitHubLog from "../../img/gitHubLogo.png";
import csdnLogo from "../../img/csdnLogo.png";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Avatar from "@material-ui/core/Avatar/Avatar";
import EmailIcon from '@material-ui/icons/Email';
import Grid from "@material-ui/core/Grid/Grid";

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
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
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});


class IndexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
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
        this.handleDrawerOpen = function () {
            this.setState({isOpen: true});
        }.bind(this);

        this.handleDrawerClose = function () {
            this.setState({isOpen: false});
        }.bind(this);
        LogHelper.info({className: "IndexContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                <div className={this.props.classes.root}>
                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={clsx(this.props.classes.appBar, {
                            [this.props.classes.appBarShift]: this.state.isOpen,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                edge="start"
                                className={clsx(this.props.classes.menuButton, {
                                    [this.props.classes.hide]: this.state.isOpen,
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                我的小宅子
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(this.props.classes.drawer, {
                            [this.props.classes.drawerOpen]: this.state.isOpen,
                            [this.props.classes.drawerClose]: !this.state.isOpen,
                        })}
                        classes={{
                            paper: clsx({
                                [this.props.classes.drawerOpen]: this.state.isOpen,
                                [this.props.classes.drawerClose]: !this.state.isOpen,
                            }),
                        }}
                        open={this.state.isOpen}
                    >
                        <div className={this.props.classes.toolbar}>
                            <IconButton
                                onClick={this.handleDrawerClose}
                            >
                                {!this.state.isOpen ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
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
                                                    [this.props.classes.headIcon_L]: this.state.isOpen,
                                                    [this.props.classes.headIcon]: !this.state.isOpen,
                                                })}
                                                src="https://www.xavierwang.cn/images/47454e58e7f249c3968524d25a6c9c7a_M.png"/>
                                        </Tooltip>
                                    </Grid>
                                    <Grid className={clsx({
                                        [this.props.classes.headInfoHide]: !this.state.isOpen
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
                                                [this.props.classes.headInfoHide]: !this.state.isOpen
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
                                                [this.props.classes.headInfoHide]: !this.state.isOpen
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
                    <main className={this.props.classes.content}>
                        <div className={this.props.classes.toolbar}/>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </main>
                </div>
                {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                {/*UserAPIOperator.login({uId: "U00000001", pw: "000000"});*/}
                {/*}}>*/}
                {/*登录*/}
                {/*</Button>*/}
                {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                {/*UserAPIOperator.logOut();*/}
                {/*}}>*/}
                {/*注销*/}
                {/*</Button>*/}
                <CallBackView/>
            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexContainer", msg: "componentDidMount----------"});
        // UserAPIOperator.login({uId: "U00000001", pw: "000000"});
        UserAPIOperator.preLogin();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexContainer", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexContainer);