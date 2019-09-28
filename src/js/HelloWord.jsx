import React from 'react';
import LogHelper from "./utils/LogHelper.jsx";

class HelloWord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "HelloWord", msg: "constructor----------"});
    }

    static getDerivedStateFromProps(nextProps, nextContext) {
        LogHelper.info({className: "HelloWord", msg: "getDerivedStateFromProps----------"});
        LogHelper.debug({className: "HelloWord", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return nextProps;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "HelloWord", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "HelloWord", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <>
                <h1 className="testStyle1">Hello world - 1.</h1>
                <h1 className="testStyle2">Hello world - 2.</h1>
            </>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "HelloWord", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "HelloWord", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "HelloWord", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "HelloWord", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "HelloWord", msg: "componentWillUnmount----------"});
    }
}

export default HelloWord;