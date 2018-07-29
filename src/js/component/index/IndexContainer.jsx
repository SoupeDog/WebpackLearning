import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import CallBackView from "../callback/CallBackView.jsx";
import Button from "@material-ui/core/es/Button/Button";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import lightGreen from "@material-ui/core/es/colors/lightGreen";
import yellow from "@material-ui/core/es/colors/yellow";
import HttpHelper from "../../utils/HttpHelper.jsx";
import JssProvider from 'react-jss/lib/JssProvider';
import {create} from 'jss';
import {createGenerateClassName, jssPreset} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({productionPrefix:"HyggeWriterComponent"});
const jss = create(jssPreset());


// const socket = new WebSocket("ws:localhost:8080/webSocket/" + Math.floor(Math.random() * 100));
//
// socket.onopen = function () {
//     console.log("Socket 已打开");
//     socket.send("这是来自客户端的消息" + location.href + new Date());
// };
// //获得消息事件
// socket.onmessage = function (msg) {
//     console.log(msg.data);
//     //发现消息进入    开始处理前端触发逻辑
// };
// //关闭事件
// socket.onclose = function () {
//     console.log("Socket已关闭");
// };
// //发生了错误事件
// socket.onerror = function () {
//     alert("Socket发生了错误");
//     //此时可以尝试刷新页面
// }

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
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={customerTheme}>
                        <CallBackView initCallBackView={this.initCallBackView.bind(this)}/>
                        <div id="button_Group"
                             style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                this.mockHttpRequest();
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
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                let _react = this;
                                _react.CallBackView.call_Dialog_Conform(true, "zoom", "注意", "这个是一个不可逆操作，请重新确认是否执行。", () => {
                                    alert("确认")
                                }, () => {
                                    alert("取消")
                                });
                            }}>
                                确认弹窗
                            </Button>
                        </div>
                    </MuiThemeProvider>
                </JssProvider>
            </div>
        );
    }

    mockHttpRequest() {
        let _react = this;
        _react.CallBackView.call_Loading_Circle_Interrupt(true);
        HttpHelper.httpGet({
            headers: {
                uid: "U00000001",
                token: "522abdd48da34499914abd2c40c2746e",
                scope: "web"
            },
            finalUrl: "http://127.0.0.1:8080/main/user/U00000001",
            success: function (data) {
                // console.log(data);
            },
            customFinally: function () {
                _react.CallBackView.call_Loading_Circle_Interrupt(false);
            }
        });
    }

    componentDidMount() {
    }
}

export default IndexContainer;