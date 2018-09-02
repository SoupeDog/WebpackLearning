import React from "react";
import ReactDOM from "react-dom";

import gitHubLog from "../../img/gitHubLogo.png";
import csdnLogo from "../../img/csdnLogo.png";

import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";

import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from '@material-ui/core/styles';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


import Button from "@material-ui/core/es/Button/Button";
import Paper from "@material-ui/core/es/Paper/Paper";
import Hidden from "@material-ui/core/es/Hidden/Hidden";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import HomeIcon from '@material-ui/icons/Home';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LinkIcon from '@material-ui/icons/Link';
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Divider from "@material-ui/core/es/Divider/Divider";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Grid from "@material-ui/core/es/Grid/Grid";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = theme => ({});


class IndexContainer extends BaseComponent {
    constructor(props) {
        super(props)
        this.state = {
            leftMenu_WideMode: true,
            currentTheme: this.StyleHelper.getLightTheme_Black_Purple()
        }

        // console.log("constructor----------");
        // console.log(JSON.stringify(props));
    }

    componentWillMount() {
        console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate----------");
        // console.log("nextProps:" + JSON.stringify(nextProps));
        // console.log("nextState:" + JSON.stringify(nextState));
        // console.log("nextContext:" + JSON.stringify(nextContext));
        return true;
    }

    renderAPPBar_Menu(leftMenu_WideMode) {
        if (leftMenu_WideMode) {
            return (
                <IconButton color="inherit"
                            className={this.state.leftMenu_WideMode ? "appBarLeftMenu_Wide" : "appBarLeftMenu"}
                            onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                    <ChevronLeftIcon/>
                </IconButton>
            );
        } else {
            return (
                <IconButton color="inherit"
                            className={this.state.leftMenu_WideMode ? "appBarLeftMenu_Wide" : "appBarLeftMenu"}
                            onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                    <ChevronRightIcon/>
                </IconButton>
            );
        }
    }

    renderAPPBar(isWideMod) {
        return (
            <div>
                <Hidden xsDown>
                    <AppBar id="appBar" position="fixed" style={{height: "64px", width: "83.33333%", left: "8.33333%"}}>
                        <Toolbar>
                            {this.renderAPPBar_Menu(isWideMod)}
                            <Typography variant="title" color="inherit"
                                        className={isWideMod ? "appBarTitle_Wide" : "appBarTitle"}
                                        style={{marginLeft: isWideMod ? "200px" : "26px"}}>
                                Bridge for You
                            </Typography>
                            <Button color="secondary">登录</Button>
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <Hidden smUp>
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton color="inherit" onClick={() => {
                                this.setState({leftMenu_WideMode: !this.state.leftMenu_WideMode})
                            }}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="title" color="inherit">
                                Bridge for You
                            </Typography>
                            <Button color="secondary">登录</Button>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
        )
    }

    renderRightMenu(isWideMod) {
        if (isWideMod) {
            return (
                <div id="main_Left"
                     className={"floatLeft " + (isWideMod ? "leftMenu_Wide" : "leftMenu")}>
                    <Tooltip title="Xavier" placement="right">
                        <Avatar
                            className={"pointer " + (this.state.leftMenu_WideMode ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                            src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                    </Tooltip>
                    <div>
                        <div style={{
                            fontSize: "12px",
                            lineHeight: "30px"
                        }}>
                            <div className="textCenter clearBoth">假装在思考的复读机</div>
                            <div className="textCenter clearBoth">
                            </div>
                            <div className="textCenter clearBoth">
                                <EmailIcon style={{
                                    fontSize: "12px",
                                    lineHeight: "40px"
                                }}/>{"　"}xavierpe@qq.com
                            </div>
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Grid item xs={2}>
                                <Tooltip title="GitHub" placement="right">
                                    <Avatar className="pointer linkIcon" src={gitHubLog}/>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={2}>
                                <Tooltip title="CSDN" placement="right">
                                    <Avatar className="pointer linkIcon" src={csdnLogo}/>
                                </Tooltip>
                            </Grid>
                        </Grid>

                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="主页"/>
                            </ListItem>
                            <Divider/>
                            <ListItem button>
                                <ListItemIcon>
                                    <LinkIcon/>
                                </ListItemIcon>
                                <ListItemText primary="友链" onClick={() => {
                                    alert("不存在的");
                                }}/>
                            </ListItem>
                            <Divider light/>
                            <ListItem button>
                                <ListItemIcon>
                                    <LiveHelpIcon/>
                                </ListItemIcon>
                                <ListItemText primary="关于"/>
                            </ListItem>
                        </List>
                    </div>

                </div>
            );
        } else {
            return (
                <div id="main_Left"
                     className={"floatLeft " + (isWideMod ? "leftMenu_Wide" : "leftMenu")}>
                    <Tooltip title="Xavier" placement="right">
                        <Avatar
                            className={"pointer " + (this.state.leftMenu_WideMode ? "xavierHeadIcon_Wide" : "xavierHeadIcon")}
                            src="https://s1.ax2x.com/2018/09/01/5Benei.png"/>
                    </Tooltip>
                    <Tooltip title="主页" placement="right">
                        <IconButton color="inherit">
                            <HomeIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="友链" placement="right">
                        <IconButton color="inherit">
                            <LinkIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="关于" placement="right">
                        <IconButton color="inherit">
                            <LiveHelpIcon/>
                        </IconButton>
                    </Tooltip>
                </div>
            );
        }
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.state.currentTheme}>
                    <CallBackView componentName={"CallBackView"} setParentNode={this.setParentNode.bind(this)}/>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid className="blank" item xs={false} sm={1}>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Paper id="main" elevation={12}>
                                {this.renderAPPBar(this.state.leftMenu_WideMode)}
                                <div
                                    className={this.state.leftMenu_WideMode ? "leftMenuContainer_Wide" : "leftMenuContainer"}
                                    // style={{
                                    //     marginTop: "64px",
                                    //     paddingLeft: this.state.leftMenu_WideMode ? "200px" : "48px",
                                    //     paddingRight: "200px"
                                    // }}
                                >
                                    {this.renderRightMenu(this.state.leftMenu_WideMode)}
                                    <div id="main_Center" className="floatLeft"
                                         style={{width: "100%", backgroundColor: "red", height: "200px"}}>
                                        b
                                    </div>
                                    <div id="main_Right" className="floatRight"
                                         style={{
                                             backgroundColor: "blue",
                                             marginRight: "-200px",
                                             width: "200px",
                                             height: "inherit"
                                         }}>
                                        c
                                    </div>
                                    <div className="clearFix"></div>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid className="blank" item xs={false} sm={1}>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        // console.log("prevProps:" + JSON.stringify(prevProps));
        // console.log("prevState:" + JSON.stringify(prevState));
        // console.log("snapshot:" + JSON.stringify(snapshot));
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }
}

export default withStyles(styles)(IndexContainer);