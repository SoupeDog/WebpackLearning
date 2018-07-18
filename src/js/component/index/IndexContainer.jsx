import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import CallBackView from "../callback/CallBackView.jsx";
import Button from "@material-ui/core/es/Button/Button";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import lightGreen from "@material-ui/core/es/colors/lightGreen";
import yellow from "@material-ui/core/es/colors/yellow";

const customerTheme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: yellow,
    },
});

class IndexContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            CallBackView: null
        }
    }

    // 初始化子组件
    initCallBackView(CallBackView) {
        this.CallBackView = CallBackView;
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <MuiThemeProvider theme={customerTheme}>
                    <CallBackView initCallBackView={this.initCallBackView.bind(this)}/>

                    <div id="button_Group" style={{width: "100%", display: "flex", justifyContent: "space-between"}}>

                        <Button variant="contained" color="primary" justify="center" onClick={() => {
                            let _react = this;
                            _react.CallBackView.call_Loading_Circle_Interrupt(true);
                            setTimeout(function () {
                                _react.CallBackView.call_Loading_Circle_Interrupt(false);
                            }, 3000);
                        }}>
                            打断型加载
                        </Button>
                        <Button variant="contained" color="primary" justify="center" onClick={() => {
                            let _react = this;
                            _react.CallBackView.call_Loading_Linear_Unknown(true);
                            setTimeout(function () {
                                _react.CallBackView.call_Loading_Linear_Unknown(false);
                            }, 3000);
                        }}>
                            非打断型加载
                        </Button>
                        <Button variant="contained" color="primary" justify="center" onClick={() => {
                            let _react = this;
                            _react.CallBackView.call_LightTip(true, "success", "这是一条成功提示");
                        }}>
                            成功提示
                        </Button>
                        <Button variant="contained" color="primary" justify="center" onClick={() => {
                            let _react = this;
                            _react.CallBackView.call_LightTip(true, "warning", "这是一条警告提示");
                        }}>
                            警告提示
                        </Button>
                        <Button variant="contained" color="primary" justify="center" onClick={() => {
                            let _react = this;
                            _react.CallBackView.call_LightTip(true, "error", "这是一条错误提示");
                        }}>
                            错误提示
                        </Button>

                    </div>


                </MuiThemeProvider>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default IndexContainer;