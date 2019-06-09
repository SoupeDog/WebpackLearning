import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import AppBar from "@material-ui/core/AppBar/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import UserAPIOperator from "../api/UserAPIOperator.jsx";
import Button from "@material-ui/core/Button/Button";
import LeftDrawerMenu_Browse from "./LeftDrawerMenu_Browse.jsx";
import WindowsEventHelper from "../../utils/WindowsEventHelper.jsx";

const drawerWidth = 240;
const styles = theme => ({
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
    }
});

class IndexAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorLoginUser: null,
            swipeableDrawerIsOpen: false,
            menu_Top_BackgroundTransparent: true
        };
        this.openSwipeableDrawer = function () {
            this.setState({
                swipeableDrawerIsOpen: true
            });
        }.bind(this);
        this.closeSwipeableDrawer = function () {
            this.setState({
                swipeableDrawerIsOpen: false
            });
        }.bind(this);
        this.setAnchorLoginUser = function (event) {
            this.setState({anchorLoginUser: event.currentTarget});
        }.bind(this);
        this.removeAnchorLoginUser = function () {
            this.setState({anchorLoginUser: null});
        }.bind(this);
        LogHelper.info({className: "IndexAppBar", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexAppBar", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <div>
                <LeftDrawerMenu_Browse swipeableDrawerIsOpen={this.state.swipeableDrawerIsOpen}
                                       openSwipeableDrawer={this.openSwipeableDrawer}
                                       closeSwipeableDrawer={this.closeSwipeableDrawer}/>
                <AppBar
                    elevation={this.state.menu_Top_BackgroundTransparent ? 0 : 1}
                    position="fixed"
                    className={clsx(this.props.classes.appBar, {"backgroundTransparent": this.state.menu_Top_BackgroundTransparent})}
                >
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={0}
                    >
                        <Grid item={true} xs={6}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="Open drawer"
                                    onClick={this.openSwipeableDrawer}
                                    edge="start"
                                    className={clsx(this.props.classes.menuButton)}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h6" noWrap>
                                    我的小宅子
                                </Typography>
                            </Toolbar>
                        </Grid>
                        <Grid item={true} xs={3} sm={4} md={5}></Grid>
                        <Grid item xs={3} sm={2} md={1}>
                            {Boolean(this.props.currentUser) && (
                                <Toolbar style={{display: "flex", justifyContent: "flex-end"}}>
                                    <IconButton
                                        aria-label="Account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={this.setAnchorLoginUser}
                                        color="inherit"
                                    >
                                        <Avatar
                                            className={clsx("pointer")}
                                            src={this.props.currentUser.headIcon}/>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={this.state.anchorLoginUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(this.state.anchorLoginUser)}
                                        onClose={this.removeAnchorLoginUser}
                                    >
                                        <MenuItem onClick={() => {
                                            UserAPIOperator.logOut({setStateToRoot: this.props.setStateToRoot});
                                            // 清理菜单锚点
                                            this.removeAnchorLoginUser();
                                        }}
                                        >注销</MenuItem>
                                    </Menu>
                                </Toolbar>
                            )}
                            {!Boolean(this.props.currentUser) && (
                                <Toolbar style={{display: "flex", justifyContent: "flex-end"}}>
                                    <Button variant="contained" color="secondary" justify="center" onClick={() => {
                                        UserAPIOperator.login({
                                            uId: "U00000001",
                                            pw: "000000",
                                            setStateToRoot: this.props.setStateToRoot
                                        });
                                    }}>
                                        登录
                                    </Button>
                                </Toolbar>
                            )}
                        </Grid>
                    </Grid>
                </AppBar>
            </div>
        );
    }

    componentDidMount() {
        let _react = this;
        WindowsEventHelper.addCallback_Scroll({
            name: "APPBar 透明判定", delta: 50, callbackFunction: function ({currentScrollY}) {
                if (currentScrollY > 270) {
                    _react.setState({menu_Top_BackgroundTransparent: false});
                } else {
                    _react.setState({menu_Top_BackgroundTransparent: true});
                }
            }
        });
        LogHelper.info({className: "IndexAppBar", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexAppBar", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexAppBar);