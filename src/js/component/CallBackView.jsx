import React from 'react';
import ReactDOM from 'react-dom';
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import {withStyles} from "@material-ui/core/styles/index";
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import WindowsEventHelper from "../utils/WindowsEventHelper.jsx";
import Modal from "@material-ui/core/es/Modal/Modal";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";
import LightTip from "./LightTip.jsx";

const styles = {
    callBackView_Container: {
        width: "100%",
        height: "0px",
        position: "fixed",
        top: "0px"
    },
    linearProgress: {
        flexGrow: 10,
        width: "100%",
        position: "absolute",
        zIndex: 10000
    }
};

const CountArray_Loading_Circle = new Array(0);
const CountArray_Loading_Linear = new Array(0);

class CallBackView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            halfProgressCircleDiameter: 100,
            currentHeight: window.innerHeight,
            currentWidth: window.innerWidth,
            loading_Circle_Interrupt: false,
            loading_Linear_Unknown: false,
            dialog_Conform: false,
            dialog_Transition: "fade",
            dialog_Title: "提示",
            dialog_Msg: "内容",
            dialog_Ensure: null,
            dialog_Cancel: null,
            lightTip_Vertical: "top",
            lightTip_Horizontal: "center",
            lightTip_Visible: false,
            lightTip_Msg: "这是一条成功信息！",
            lightTip_Variant: "success"
        }
        this.props.setParentNode({componentName: this.props.componentName, target: this});
        LogHelper.info({className: "CallBackView", msg: "constructor----------"});
        LogHelper.debug({tag: "props", msg: props, isJson: false});
        // 事件 bind
        this.close_LightTip = this.call_LightTip.bind(this, {
            isOpen: false
        });
    }

    componentWillMount() {
        LogHelper.info({className: "CallBackView", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "CallBackView", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "CallBackView", tag: "nextProps", msg: nextProps, isJson: false});
        LogHelper.debug({className: "CallBackView", tag: "nextContext", msg: nextContext, isJson: false});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "CallBackView", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "CallBackView", tag: "nextProps", msg: nextProps, isJson: false});
        LogHelper.debug({className: "CallBackView", tag: "nextState", msg: nextState, isJson: false});
        LogHelper.debug({className: "CallBackView", tag: "nextContext", msg: nextContext, isJson: false});
        return true;
    }

    render() {
        return (
            <div id="CallbackHelper" className={this.props.classes.callBackView_Container}>
                {this.state.loading_Linear_Unknown ?
                    <LinearProgress className={this.props.classes.linearProgress} color="secondary"/> : null}

                {this.state.loading_Circle_Interrupt ?
                    <Modal className={"loading_Circle_Interrupt"}
                           open={true}
                           disableEnforceFocus={true}
                    >
                        <CircularProgress
                            size={(this.state.halfProgressCircleDiameter)}
                            style={{
                                outline: "none",
                                margin: StyleHelper.createMargin({
                                    fatherWidth: this.state.currentWidth,
                                    fatherHeight: this.state.currentHeight,
                                    sonWidth: this.state.halfProgressCircleDiameter,
                                    sonHeight: this.state.halfProgressCircleDiameter
                                })
                            }}
                        />
                    </Modal> : null}

                <Snackbar
                    anchorOrigin={{
                        vertical: this.state.lightTip_Vertical,
                        horizontal: this.state.lightTip_Horizontal,
                    }}
                    open={this.state.lightTip_Visible}
                    autoHideDuration={3000}
                    onClose={this.close_LightTip}
                >
                    <LightTip
                        onClose={this.close_LightTip}
                        variant={this.state.lightTip_Variant}
                        message={this.state.lightTip_Msg}
                    />
                </Snackbar>
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "CallBackView", msg: "componentDidMount----------"});
        WindowsEventHelper.addCallback_Resize({
            name: "设置加载圈位置",
            delta: 150,
            callbackFunction: this.initCircleSize.bind(this)
        });
        WindowsEventHelper.start_OnResize();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "CallBackView", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "CallBackView", tag: "prevProps", msg: prevProps, isJson: false});
        LogHelper.debug({className: "CallBackView", tag: "prevState", msg: prevState, isJson: false});
        LogHelper.debug({className: "CallBackView", tag: "snapshot", msg: snapshot, isJson: false});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "CallBackView", msg: "componentWillUnmount----------"});
        LogHelper.debug({msg: ""});
    }

    initCircleSize({currentWidth, currentHight}) {
        LogHelper.info({className: "CallBackView", msg: "UpdateCircleSize"});
        this.setState({
            currentHeight: currentHight,
            currentWidth: currentWidth,
        });
    }

    call_Loading_Circle_Interrupt(isOpen) {
        let countArray = CountArray_Loading_Circle;
        if (isOpen) {
            countArray.push(0);
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Circle add,current: " + countArray.length,
                isJson: false
            });
        } else {
            countArray.pop();
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Circle remove,current: " + countArray.length,
                isJson: false
            });
        }
        if (countArray.length > 0) {
            if (this.state.loading_Circle_Interrupt == false) {
                this.setState({loading_Circle_Interrupt: true});
            }
        } else {
            if (this.state.loading_Circle_Interrupt == true) {
                this.setState({loading_Circle_Interrupt: false});
            }
        }
    }

    call_Loading_Linear_Unknown(isOpen) {
        let countArray = CountArray_Loading_Linear;
        if (isOpen) {
            countArray.push(0);
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Linear add,current: " + countArray.length,
                isJson: false
            });
        } else {
            countArray.pop();
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Linear remove,current: " + countArray.length,
                isJson: false
            });
        }
        if (countArray.length > 0) {
            if (this.state.loading_Linear_Unknown == false) {
                this.setState({loading_Linear_Unknown: true});
            }
        } else {
            if (this.state.loading_Linear_Unknown == true) {
                this.setState({loading_Linear_Unknown: false});
            }
        }
    }

    call_Dialog_Conform({isOpen, transition, title, msg, ensureCallback, cancelCallback}) {
        this.setState({
            dialog_Conform: isOpen,
            dialog_Transition: transition == null ? "fade" : transition,
            dialog_Title: title,
            dialog_Msg: msg,
            dialog_Ensure: ensureCallback,
            dialog_Cancel: cancelCallback
        });
    }

    call_LightTip({isOpen, type, msg, vertical, horizontal}) {
        let config = {
            lightTip_Visible: isOpen
        };
        if (type != null) {
            config.lightTip_Variant = type;
        }
        if (msg != null) {
            config.lightTip_Msg = msg;
        }
        if (vertical != null) {
            config.lightTip_Vertical = vertical;
        }
        if (horizontal != null) {
            config.lightTip_Horizontal = horizontal;
        }
        this.setState(config);
    }
}

export default withStyles(styles)(CallBackView);