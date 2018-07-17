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
            lightTip_Success_Visible:true,
            lightTip_Success_Msg:"这是一条成功信息！",
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
                    open={this.state.lightTip_Success_Visible}
                    autoHideDuration={300000}
                    onClose={this.isVisible_lightTip_Success.bind(this,!this.state.lightTip_Success_Visible)}
                >
                    <LightTip
                        onClose={this.isVisible_lightTip_Success.bind(this,!this.state.lightTip_Success_Visible)}
                        variant="success"
                        message={this.state.lightTip_Success_Msg}
                    />
                </Snackbar>
            </div>
        );
    }

    componentDidMount() {
    }

    isVisible_Loading_Circle_Interrupt(state) {
        this.setState({loading_Circle_Interrupt: state});
    }
    isVisible_lightTip_Success(state) {
        this.setState({lightTip_Success_Visible: state});
    }



}

export default CallBackView;