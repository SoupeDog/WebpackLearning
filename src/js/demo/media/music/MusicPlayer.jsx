import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";

class MusicPlayer extends React.Component {

    constructor(props) {
        super(props);
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
        if (this.props.type == nextProps.type &&
            this.props.src == nextProps.src) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        switch (this.props.type) {
            default:
                return (
                    <iframe className="wangYi_CloudMusic"
                            style={{
                                margin: 0,
                                border: "0",
                                padding: "0",
                                width: "100%",
                                height: "80px"
                            }} src={this.props.src}>
                    </iframe>
                );
        }
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