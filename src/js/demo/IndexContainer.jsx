import React from 'react';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Menu_Top_PC from "./header/Menu_Top_PC.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";

class indexContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
                    <Menu_Top_PC/>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">


                    </Grid>
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

export default indexContainer;