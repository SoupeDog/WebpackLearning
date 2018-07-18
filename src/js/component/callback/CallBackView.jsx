import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import Loading_Circle_Interrupt from "./Loading_Circle_Interrupt.jsx";
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";
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
            lightTip_Visible: false,
            lightTip_Msg: "这是一条成功信息！",
            lightTip_variant: "success"
        }
        this.props.initCallBackView(this);
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <Loading_Linear_Unknown open={this.state.loading_Linear_Unknown}/>
                <Loading_Circle_Interrupt open={this.state.loading_Circle_Interrupt}/>
                <Dialog_Conform call_Dialog_Conform={this.call_Dialog_Conform.bind(this)}
                                open={this.state.dialog_Conform}
                                transition={this.state.dialog_Transition}
                                title={this.state.dialog_Title}
                                msg={this.state.dialog_Msg}
                                ensure={this.state.dialog_Ensure}
                                cancel={this.state.dialog_Cancel}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.lightTip_Visible}
                    autoHideDuration={3000}
                    onClose={this.call_LightTip.bind(this, false, this.state.lightTip_variant, this.state.lightTip_Msg)}
                >
                    <LightTip
                        onClose={this.call_LightTip.bind(this, false, this.state.lightTip_variant, this.state.lightTip_Msg)}
                        variant={this.state.lightTip_variant}
                        message={this.state.lightTip_Msg}
                    />
                </Snackbar>
            </div>
        );
    }

    componentDidMount() {
    }

    call_Loading_Circle_Interrupt(state) {
        this.setState({loading_Circle_Interrupt: state});
    }

    call_Loading_Linear_Unknown(state) {
        this.setState({loading_Linear_Unknown: state});
    }

    call_Dialog_Conform(state, transition, title, msg, ensure, cancel) {
        this.setState({
            dialog_Conform: state,
            dialog_Transition: transition == null ? "fade" : transition,
            dialog_Title: title,
            dialog_Msg: msg,
            dialog_Ensure: ensure,
            dialog_Cancel: cancel
        });
    }

    call_LightTip(state, variant, msg) {
        this.setState({
            lightTip_Visible: state,
            lightTip_variant: variant,
            lightTip_Msg: msg
        });
    }


}

export default CallBackView;