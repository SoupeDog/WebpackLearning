import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import Loading_Circle_Interrupt from "./Loading_Circle_Interrupt.jsx";
import Snackbar from "@material-ui/core/es/Snackbar/Snackbar";
import LightTip from "./LightTip.jsx";

class CallBackView extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading_Circle_Interrupt: false,
            lightTip_Visible: true,
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
                <Loading_Circle_Interrupt open={this.state.loading_Circle_Interrupt}/>
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

    call_LightTip(state, variant, msg) {
        this.setState({
            lightTip_Visible: state,
            lightTip_variant: variant,
            lightTip_Msg: msg
        });
    }


}

export default CallBackView;