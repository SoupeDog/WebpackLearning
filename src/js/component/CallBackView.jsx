import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import LogHelper from "../utils/LogHelper.jsx";
import WindowsEventHelper from "../utils/WindowsEventHelper.jsx";
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";
import LightTip from "./alert/LightTip.jsx";
import Loading_Linear_Unknown from "./loading/Loading_Linear_Unknown.jsx";
import Loading_Circle_Interrupt from "./loading/Loading_Circle_Interrupt.jsx";
import Dialog_Conform from "./dialog/Dialog_Conform.jsx";

const styles = {
    callBackView_Container: {
        width: "100%",
        height: "0px",
        position: "fixed",
        top: "0px"
    }
};

const CountArray_Loading_Circle = new Array(0);
const CountArray_Loading_Linear = new Array(0);
const LightTip_Queue = new Array(0);

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
            lightTipKey: 0,
            lightTip_Vertical: "top",
            lightTip_Horizontal: "center",
            lightTip_Visible: false,
            lightTip_Msg: "这是一条成功信息！",
            lightTip_Variant: "success"
        }
        this.props.setParentNode({componentName: this.props.componentName, target: this});
        LogHelper.info({className: "CallBackView", msg: "constructor----------"});
        LogHelper.debug({tag: "props", msg: props, isJson: true});
        // 事件 bind
        this.close_LightTip = this.closeLightTip.bind(this);
        this.consumeLightTipMsg = this.consumeLightTipMsg.bind(this);
        this.call_Dialog_Conform = this.call_Dialog_Conform.bind(this);
    }

    componentWillMount() {
        LogHelper.info({className: "CallBackView", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "CallBackView", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "CallBackView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "CallBackView", tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "CallBackView", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "CallBackView", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "CallBackView", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "CallBackView", tag: "nextContext", msg: nextContext, isJson: true});
        if (this.state.currentHeight == nextState.currentHeight &&
            this.state.currentWidth == nextState.currentWidth &&
            this.state.loading_Circle_Interrupt == nextState.loading_Circle_Interrupt &&
            this.state.loading_Linear_Unknown == nextState.loading_Linear_Unknown &&
            this.state.lightTip_Visible == nextState.lightTip_Visible &&
            this.state.dialog_Conform == nextState.dialog_Conform) {
            return false
        } else {
            return true;
        }
    }

    render() {
        return (
            <div id="CallbackHelper" className={this.props.classes.callBackView_Container}>
                <Loading_Linear_Unknown isShow={this.state.loading_Linear_Unknown}/>
                <Loading_Circle_Interrupt
                    isShow={this.state.loading_Circle_Interrupt}
                    currentHeight={this.state.currentHeight}
                    currentWidth={this.state.currentWidth}
                    halfProgressCircleDiameter={this.state.halfProgressCircleDiameter}
                />
                <Snackbar
                    key={this.state.lightTipKey}
                    anchorOrigin={{
                        vertical: this.state.lightTip_Vertical,
                        horizontal: this.state.lightTip_Horizontal,
                    }}
                    open={this.state.lightTip_Visible}
                    autoHideDuration={3000}
                    onExited={this.consumeLightTipMsg}
                    onClose={this.close_LightTip}
                >
                    <LightTip
                        onClose={this.close_LightTip}
                        variant={this.state.lightTip_Variant}
                        message={this.state.lightTip_Msg}
                    />
                </Snackbar>
                {this.state.dialog_Conform ?
                    <Dialog_Conform
                        scroll={this.state.scroll}
                        call_Dialog_Conform={this.call_Dialog_Conform}
                        needRender={this.state.dialog_Conform}
                        transition={this.state.dialog_Transition}
                        title={this.state.dialog_Title}
                        msg={this.state.dialog_Msg}
                        ensure={this.state.dialog_Ensure == null ? null : this.state.dialog_Ensure.bind(this)}
                        cancel={this.state.dialog_Cancel == null ? null : this.state.dialog_Cancel.bind(this)}/>
                    : null}

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
        LogHelper.debug({className: "CallBackView", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "CallBackView", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "CallBackView", tag: "snapshot", msg: snapshot, isJson: true});
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
                isJson: true
            });
        } else {
            countArray.pop();
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Circle remove,current: " + countArray.length,
                isJson: true
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
                isJson: true
            });
        } else {
            countArray.pop();
            LogHelper.info({
                className: "CallBackView",
                msg: "Loading_Linear remove,current: " + countArray.length,
                isJson: true
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

    call_Dialog_Conform({isOpen, scroll, transition, title, msg, ensureCallback, cancelCallback}) {
        if (isOpen) {
            this.setState({
                scroll: scroll,
                dialog_Conform: true,
                dialog_Transition: transition == null ? "fade" : transition,
                dialog_Title: title,
                dialog_Msg: msg,
                dialog_Ensure: ensureCallback,
                dialog_Cancel: cancelCallback
            });
        } else {
            this.setState({
                dialog_Conform: false,
                scroll: null,
                dialog_Transition: transition == null ? "fade" : transition,
                dialog_Title: null,
                dialog_Msg: null,
                dialog_Ensure: null,
                dialog_Cancel: null
            });
        }
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
        config.lightTipKey = new Date().getTime();
        this.addLightTipToQueue(config);
    }

    addLightTipToQueue(settingsJsonObj) {
        LightTip_Queue.push(settingsJsonObj);
        if (this.state.lightTip_Visible) {
            this.setState({lightTip_Visible: false});
        } else {
            this.consumeLightTipMsg();
        }
    }

    consumeLightTipMsg() {
        if (LightTip_Queue.length > 0) {
            let config = LightTip_Queue.shift();
            config.lightTip_Visible = true;
            this.setState(config);
        }
    }

    closeLightTip(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({lightTip_Visible: false});
    }

}

export default withStyles(styles)(CallBackView);