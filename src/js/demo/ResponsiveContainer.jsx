import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import {withStyles} from "@material-ui/core/styles/index";
import AutoComplete from "../component/input/AutoComplete.jsx";
import Button from "@material-ui/core/es/Button/Button";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 1,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
});


class ResponsiveContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            callbackTheme: this.StyleHelper.getLightTheme_Black_Purple(),
            show: true
        }
        this.LogHelper.info({msg: "constructor----------"});
        this.LogHelper.debug({tag: "props", msg: props, isJson: true});
    }

    componentWillMount() {
        this.LogHelper.info({msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.LogHelper.info({msg: "componentWillReceiveProps----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.LogHelper.info({msg: "shouldComponentUpdate----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextState", msg: nextState, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
        return true;
    }

    render() {
        return (
            <div>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={this.state.callbackTheme}>
                        <CallBackView componentName={"CallBackView"} setParentNode={this.setParentNode.bind(this)}/>
                        <div className={this.props.classes.root}>
                            <Grid container spacing={0}>
                                <Grid item xs={12}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=12</Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <AutoComplete componentName={"AutoComplete_1"}
                                                  setParentNode={this.setParentNode.bind(this)} fullWidth
                                                  error={false} label={"姓名"} isMultiple={false}
                                                  placeholder={null}
                                                  suggestions={["张三", "李四"]}
                                    />
                                    <Button variant="contained" color="primary" justify="center" onClick={() => {
                                        // this.AutoComplete_1.cleanVal();
                                        alert(this.AutoComplete_1.getVal());
                                    }}>
                                        清除
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <AutoComplete componentName={"AutoComplete_2"}
                                                  setParentNode={this.setParentNode.bind(this)} fullWidth
                                                  error={false} label={"姓名"} isMultiple={true}
                                                  placeholder={null}
                                                  suggestions={["张三", "李四"]}
                                    />
                                    <Button variant="contained" color="primary" justify="center" onClick={() => {
                                        // this.AutoComplete_2.cleanVal();
                                        alert(this.AutoComplete_2.getVal());
                                    }}>
                                        清除
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={this.props.classes.paper} elevation={0}>xs 搞事=3</Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </MuiThemeProvider>
                </JssProvider>
            </div>
        );
    }

    componentDidMount() {
        this.LogHelper.info({msg: "componentDidMount----------"});
        this.LogHelper.debug({msg: ""});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.LogHelper.info({msg: "componentDidUpdate----------"});
        this.LogHelper.debug({tag: "prevProps", msg: prevProps, isJson: true});
        this.LogHelper.debug({tag: "prevState", msg: prevState, isJson: true});
        this.LogHelper.debug({tag: "snapshot", msg: snapshot, isJson: true});
        this.LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        this.LogHelper.info({msg: "componentWillUnmount----------"});
        this.LogHelper.debug({msg: ""});
    }

}

export default withStyles(styles)(ResponsiveContainer);