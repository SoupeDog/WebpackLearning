import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import Loading_Circle_Interrupt from "./Loading_Circle_Interrupt.jsx";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import LightTip from "./LightTip.jsx";
import Loading_Linear_Unknown from "./Loading_Linear_Unknown.jsx";
import Dialog_Conform from "./Dialog_Conform.jsx";

class CallBackView extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
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
    }

    renderLoading_Linear_Unknown() {
        if (this.state.loading_Linear_Unknown) {
            return (
                <Loading_Linear_Unknown open={this.state.loading_Linear_Unknown}/>
            );
        } else {
            return (null);
        }
    }

    renderLoading_Circle_Interrupt() {
        if (this.state.loading_Circle_Interrupt) {
            return (
                <Loading_Circle_Interrupt open={this.state.loading_Circle_Interrupt}/>
            );
        } else {
            return (null);
        }
    }

    renderDialog_Conform() {
        if (this.state.dialog_Conform) {
            return (
                <Dialog_Conform call_Dialog_Conform={this.call_Dialog_Conform.bind(this)}
                                open={this.state.dialog_Conform}
                                transition={this.state.dialog_Transition}
                                title={this.state.dialog_Title}
                                msg={this.state.dialog_Msg}
                                ensure={this.state.dialog_Ensure.bind(this)}
                                cancel={this.state.dialog_Cancel.bind(this)}
                />
            );
        } else {
            return (null);
        }
    }

    renderLightTip() {
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: this.state.lightTip_Vertical,
                    horizontal: this.state.lightTip_Horizontal,
                }}
                open={this.state.lightTip_Visible}
                autoHideDuration={3000}
                onClose={this.call_LightTip.bind(this, {
                    isOpen: false,
                    type: this.state.lightTip_Variant,
                    msg: this.state.lightTip_Msg
                })}
            >
                <LightTip
                    onClose={this.call_LightTip.bind(this, {
                        isOpen: false,
                        type: this.state.lightTip_Variant,
                        msg: this.state.lightTip_Msg
                    })}
                    variant={this.state.lightTip_Variant}
                    message={this.state.lightTip_Msg}
                />
            </Snackbar>
        );
    }

    render() {
        return (
            <div id="CallbackHelper">
                {this.renderLoading_Linear_Unknown()}
                {this.renderLoading_Circle_Interrupt()}
                {this.renderDialog_Conform()}
                {this.renderLightTip()}
            </div>
        );
    }

    call_Loading_Circle_Interrupt(isOpen) {
        this.setState({loading_Circle_Interrupt: isOpen});
    }

    call_Loading_Linear_Unknown(isOpen) {
        this.setState({loading_Linear_Unknown: isOpen});
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
            lightTip_Visible: isOpen,
            lightTip_Variant: type,
            lightTip_Msg: msg
        };
        if (vertical != null) {
            config.lightTip_Vertical = vertical;
        }
        if (horizontal != null) {
            config.lightTip_Horizontal = horizontal;
        }
        this.setState(config);
    }
}

export default CallBackView;