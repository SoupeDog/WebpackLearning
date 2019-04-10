import React from 'react';
import classNames from "classnames";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";


const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import {withStyles} from "@material-ui/core/styles/index";
import CallBackView from "../component/CallBackView.jsx";
import Menu_Top_Index from "./menu/Menu_Top_Index.jsx";
import LeftDrawerMenu_Index from "./menu/LeftDrawerMenu_Index.jsx";
import IndexMain from "./IndexMain.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";


const styles = theme => ({
    root: {
        display: 'flex',
        minWidth: "1050px"
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
        width: "0px"  // 因为 flexGrow 实际宽度会变成0px+ 父容器剩余部分
    },
    main_Container: {
        display: 'flex',
    }
});


class IndexContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leftDrawerOpen: false
        };
        this.handleDrawerOpen = function () {
            this.setState({leftDrawerOpen: true});
        }.bind(this);
        this.handleDrawerClose = function () {
            this.setState({leftDrawerOpen: false});
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
                    <div style={{clear:"both",float:"left",width:"100%"}} className={this.props.classes.root}>
                        <Menu_Top_Index open={this.state.leftDrawerOpen} handleDrawerOpen={this.handleDrawerOpen}/>
                        <LeftDrawerMenu_Index open={this.state.leftDrawerOpen}
                                              handleDrawerClose={this.handleDrawerClose}/>
                        <IndexMain open={this.state.leftDrawerOpen}/>
                    </div>
                    <div style={{clear:"both",float:"left",width:"100%"}}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={8} lg={6}>
                                <a style={{display:"block",textAlign:"center"}} href={"http://www.beian.miit.gov.cn"}>津ICP备18004196号-1</a>
                            </Grid>
                        </Grid>
                    </div>
                    <CallBackView/>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    componentDidMount() {
        if (localStorage.getItem("isPC") == null && !this.props.isPC) {
            CallBackViewHelper.call_Dialog_Conform({
                isOpen: true,
                title: "提示",
                scroll: "body",
                msg: "检测到您可能使用了移动端设备访问，因本站暂未针对移动端开发独立 UI ,为获得最佳体验，建议您切换为 PC 访问。若执意使用移动端访问，禁用放大，横屏为佳。",
                dialog_Ensure_Text: "不再提示",
                ensureCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                    localStorage.setItem("isPC", true);
                },
                dialog_Cancel_Text: "了解",
                cancelCallback: function () {
                    CallBackViewHelper.call_Dialog_Conform({isOpen: false});
                    localStorage.removeItem("isPC");
                }
            });
        }
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