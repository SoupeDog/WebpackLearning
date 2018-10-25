import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";

class RightMenu_Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "RightMenu_Index", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "RightMenu_Index", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <div style={{position:"static",r,width:"240px",height:"600px",backgroundColor:"red"}}></div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "RightMenu_Index", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "RightMenu_Index", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "RightMenu_Index", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "RightMenu_Index", msg: "componentWillUnmount----------"});
    }
}

export default RightMenu_Index;