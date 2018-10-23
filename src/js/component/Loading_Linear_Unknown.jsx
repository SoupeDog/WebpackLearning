import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import LogHelper from "../utils/LogHelper.jsx";

const styles = {
    root: {
        flexGrow: 10,
        width: "100%",
        position: "absolute",
        zIndex: 10000
    },
};

class Loading_Linear_Unknown extends React.Component {

    constructor(props) {
        super(props)
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "nextContext", msg: nextContext, isJson: true});
        if (this.props.isShow == nextProps.isShow) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.isShow) {
            return (
                <div className={this.props.classes.root}>
                    <LinearProgress color="secondary"/>
                </div>
            );
        } else {
            return (null);
        }
    }


    componentDidMount() {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "Loading_Linear_Unknown", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "Loading_Linear_Unknown", msg: "componentWillUnmount----------"});
    }

}

export default withStyles(styles)(Loading_Linear_Unknown);