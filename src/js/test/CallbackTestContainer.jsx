import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/CallBackView.jsx";
import Button from "@material-ui/core/es/Button/Button";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import StyleHelper from "../utils/StyleHelper.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";

import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";
import WindowsEventHelper from "../utils/WindowsEventHelper.jsx";
import LogHelper from "../utils/LogHelper.jsx";
import HttpHelper from "../utils/HttpHelper.jsx";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());

class CallbackTestContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            theme: StyleHelper.getLightTheme_Black_Purple(),
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                <JssProvider jss={jss} generateClassName={generateClassName}>
                    <MuiThemeProvider theme={this.state.theme}>
                        <div id="button_Group"
                             style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_Loading_Circle_Interrupt(true);
                                setTimeout(function () {
                                    CallBackViewHelper.call_Loading_Circle_Interrupt(false);
                                }, 3000);

                                // let _react = this;
                                // CallBackViewHelper.call_Loading_Circle_Interrupt(true);
                                // setTimeout(function () {
                                //     CallBackViewHelper.call_Loading_Circle_Interrupt(false);
                                // }, 3000);
                            }}>
                                打断型加载
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_Loading_Linear_Unknown(true);
                                HttpHelper.httpGet({
                                    finalUrl: "https://www.xavierwang.cn/article-service/main/article/f8ef5e3e31ad4a97a8f9e7d55d37bb8c",
                                    headers: {
                                        uId: "U00000003",
                                        token: "8926c177ac7248668350f20661d547f0",
                                        scope: "web"
                                    },
                                    successCallback: function (response) {
                                        alert(JSON.stringify(response));
                                    },
                                    errorCallback: function (response) {
                                        alert("失败: " + JSON.stringify(response));
                                    }
                                });
                            }}>
                                非打断型加载+
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_Loading_Linear_Unknown(false);
                            }}>
                                非打断型加载-
                            </Button>
                        </div>
                        {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                        {/*let _react = this;*/}
                        {/*CallBackViewHelper.call_Dialog_Conform({*/}
                        {/*isOpen: true,*/}
                        {/*transaction: "zoom",*/}
                        {/*title: "注意",*/}
                        {/*msg: "这个是一个不可逆操作，请重新确认是否执行。",*/}
                        {/*ensureCallback: () => {*/}
                        {/*alert("确认")*/}
                        {/*CallBackViewHelper.call_Loading_Circle_Interrupt({isOpen: true});*/}
                        {/*window.setTimeout(()=>{*/}
                        {/*CallBackViewHelper.call_Loading_Circle_Interrupt({isOpen: false});*/}
                        {/*},3000);*/}
                        {/*},*/}
                        {/*cancelCallback: () => {*/}
                        {/*alert("取消")*/}
                        {/*}*/}
                        {/*});*/}
                        {/*}}>*/}
                        {/*Bug Maker*/}
                        {/*</Button>*/}
                        <br/>
                        <br/>
                        <div id="button_Group"
                             style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_LightTip({
                                    isOpen: true,
                                    type: "success",
                                    msg: "这是一条成功提示",
                                    vertical: "bottom",
                                    horizontal: "center"
                                });
                            }}>
                                成功提示
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_LightTip({
                                    isOpen: true,
                                    type: "warning",
                                    msg: "这是一条警告提示",
                                    vertical: "top",
                                    horizontal: "center"
                                });
                            }}>
                                警告提示
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_LightTip({
                                    isOpen: true,
                                    type: "error",
                                    msg: "这是一条错误提示",
                                    vertical: "top",
                                    horizontal: "left"
                                });
                            }}>
                                错误提示
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_Dialog_Conform({
                                    isOpen: true,
                                    scroll: "body",
                                    transition: "slide",
                                    title: "注意",
                                    msg: "这个是一个不可逆操作，请重新确认是否执行。",
                                    ensureCallback: () => {
                                        alert("确认");
                                        CallBackViewHelper.call_Dialog_Conform({isOpen: false});// 删除组件
                                    },
                                    cancelCallback: () => {
                                        alert("取消")
                                        CallBackViewHelper.call_Dialog_Conform({isOpen: false});// 删除组件
                                    }
                                });
                            }}>
                                确认弹窗
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                CallBackViewHelper.call_Dialog_Conform({
                                    isOpen: true,
                                    scroll: "body",
                                    transition: "slide",
                                    title: "注意2",
                                    msg: "这个是一个不可逆操作，请重新确认是否执行。2",
                                    ensureCallback: () => {
                                        alert("确认2");
                                        CallBackViewHelper.call_Dialog_Conform({isOpen: false});// 删除组件
                                    },
                                    cancelCallback: () => {
                                        alert("取消2")
                                        CallBackViewHelper.call_Dialog_Conform({isOpen: false});// 删除组件
                                    }
                                });
                            }}>
                                确认弹窗
                            </Button>
                        </div>
                        <CallBackView componentName={"CallBackView"} setParentNode={this.setParentNode.bind(this)}/>
                    </MuiThemeProvider>
                </JssProvider>
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "CallBackView", msg: "componentDidMount----------"});
        WindowsEventHelper.start_OnResize();
    }

}

export default CallbackTestContainer;