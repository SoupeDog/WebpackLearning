import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";

class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "MusicPlayer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "MusicPlayer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "MusicPlayer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "MusicPlayer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "MusicPlayer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "MusicPlayer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "MusicPlayer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "MusicPlayer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "MusicPlayer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            null
        );
    }

    componentDidMount() {
        LogHelper.info({className: "MusicPlayer", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "MusicPlayer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "MusicPlayer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "MusicPlayer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "MusicPlayer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "MusicPlayer", msg: "componentWillUnmount----------"});
    }
}

export default MusicPlayer;