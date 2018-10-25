import React from 'react';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";


const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";

import {withStyles} from "@material-ui/core/styles/index";
import CallBackView from "../component/CallBackView.jsx";
import Menu_Top_Index from "./menu/Menu_Top_Index.jsx";
import LeftDrawerMenu_Index from "./menu/LeftDrawerMenu_Index.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";
import ArticleSummaryList from "./article/ArticleSummaryList.jsx";

const styles = theme => ({
    root: {
        display: 'flex'
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
        width:"0px"  // 因为 flexGrow 实际宽度会变成0px+ 父容器剩余部分
    },
});


class IndexContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            focusedTabIndex: 0
        };
        this.handleFocusedTabIndexChange = function (event, nextIndex) {
            this.setState({focusedTabIndex: nextIndex});
        }.bind(this);
        this.handleDrawerOpen = function () {
            this.setState({open: true});
        }.bind(this);
        this.handleDrawerClose = function () {
            this.setState({open: false});
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
                        <LeftDrawerMenu_Index open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
                        <div className={this.props.classes.content}>
                            <div className={this.props.classes.toolbar}/>
                            <div>
                                <ArticleSummaryList focusedTabIndex={this.state.focusedTabIndex}
                                                    handleFocusedTabIndexChange={this.handleFocusedTabIndexChange}/>

                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >

                                </Grid>
                            </div>
                            <div>

                            </div>
                        </div>
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