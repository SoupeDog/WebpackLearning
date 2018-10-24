import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";

class Menu_Top_PC extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "Menu_Top_PC", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "Menu_Top_PC", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "Menu_Top_PC", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "Menu_Top_PC", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_PC", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "Menu_Top_PC", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "Menu_Top_PC", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_PC", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "Menu_Top_PC", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            null
        );
    }

    componentDidMount() {
        LogHelper.info({className: "Menu_Top_PC", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "Menu_Top_PC", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "Menu_Top_PC", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_PC", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "Menu_Top_PC", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "Menu_Top_PC", msg: "componentWillUnmount----------"});
    }
}

export default Menu_Top_PC;