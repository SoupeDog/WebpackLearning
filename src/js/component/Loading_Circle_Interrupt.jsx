import React from 'react';
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";

class Loading_Circle_Interrupt extends React.Component {

    constructor(props) {
        super(props)
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "nextContext", msg: nextContext, isJson: true});
        if (this.props.currentHeight == nextProps.currentHeight &&
            this.props.currentWidth == nextProps.currentWidth &&
            this.props.halfProgressCircleDiameter == nextProps.halfProgressCircleDiameter &&
            this.props.isShow == nextProps.isShow) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.isShow) {
            return (
                <Modal className={"loading_Circle_Interrupt"}
                       open={true}
                       disableEnforceFocus={true}
                >
                    <CircularProgress
                        size={(this.props.halfProgressCircleDiameter)}
                        style={{
                            outline: "none",
                            margin: StyleHelper.createMargin({
                                fatherWidth: this.props.currentWidth,
                                fatherHeight: this.props.currentHeight,
                                sonWidth: this.props.halfProgressCircleDiameter,
                                sonHeight: this.props.halfProgressCircleDiameter
                            })
                        }}
                    />
                </Modal>
            );
        } else {
            return (null);
        }
    }


    componentDidMount() {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "Loading_Circle_Interrupt", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "Loading_Circle_Interrupt", msg: "componentWillUnmount----------"});
    }
}

export default Loading_Circle_Interrupt;