import React from 'react';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import classNames from 'classnames';

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import Divider from "@material-ui/core/es/Divider/Divider";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import {withStyles} from "@material-ui/core/styles/index";

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';

import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Grid from "@material-ui/core/es/Grid/Grid";
import gitHubLog from "../../img/gitHubLogo.png";
import csdnLogo from "../../img/csdnLogo.png";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import Menu_Top_Index from "./header/Menu_Top_Index.jsx";


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
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
        padding: theme.spacing.unit * 3,
    },
});


class IndexContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleDrawerOpen = function () {
            this.setState({open: true});
        }.bind(this);
        this.handleDrawerClose = function () {
            this.setState({open: false});
        }.bind(this);
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
        LogHelper.info({className: "indexContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "indexContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "indexContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "indexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "indexContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "indexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                    <div className={this.props.classes.root}>
                        <Menu_Top_Index open={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: classNames(this.props.classes.drawerPaper, !this.state.open && this.props.classes.drawerPaperClose),
                            }}
                            open={this.state.open}
                        >
                            <div className={this.props.classes.toolbar}>
                                <IconButton onClick={this.handleDrawerClose}>
                                    {styles.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                                </IconButton>
                            </div>
                            <Divider/>
                            <List>
                                <ListItem>
                                    {this.state.open ?
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
                                                        className={"pointer " + (this.state.open ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
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
                                            <Grid item xs={2}>
                                                <Tooltip title="GitHub" placement="right">
                                                    <Avatar className="pointer linkIcon" src={gitHubLog}
                                                            onClick={() => {
                                                                window.open("https://github.com/SoupeDog");
                                                            }
                                                            }/>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item xs={2}>
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
                                                    className={"pointer " + (this.state.open ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
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
                        <main className={this.props.classes.content}>
                            <div className={this.props.classes.toolbar}/>
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                                hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                                velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                                Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                                viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                                Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                                at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                                ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                                sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                                In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                                viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                                ultrices sagittis orci a.
                            </Typography>
                        </main>
                    </div>
                    <CallBackView/>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "indexContainer", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "indexContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "indexContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "indexContainer", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexContainer);