import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/CallBackView.jsx";
import Button from "@material-ui/core/es/Button/Button";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import StyleHelper from "../utils/StyleHelper.jsx";

import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());

class CallbackTestContainer extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            theme: StyleHelper.getLightTheme_Black_Purple(),
            CallBackView: null
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
                            }}>
                                非打断型加载+
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                let _react = this;
                                _react.CallBackView.call_Loading_Linear_Unknown(false);
                            }}>
                                非打断型加载-
                            </Button>
                        </div>
                        {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                        {/*let _react = this;*/}
                        {/*_react.CallBackView.call_Dialog_Conform({*/}
                        {/*isOpen: true,*/}
                        {/*transaction: "zoom",*/}
                        {/*title: "注意",*/}
                        {/*msg: "这个是一个不可逆操作，请重新确认是否执行。",*/}
                        {/*ensureCallback: () => {*/}
                        {/*alert("确认")*/}
                        {/*_react.CallBackView.call_Loading_Circle_Interrupt({isOpen: true});*/}
                        {/*window.setTimeout(()=>{*/}
                        {/*_react.CallBackView.call_Loading_Circle_Interrupt({isOpen: false});*/}
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
                                let _react = this;
                                _react.CallBackView.call_LightTip({
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
                                let _react = this;
                                _react.CallBackView.call_LightTip({
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
                                let _react = this;
                                _react.CallBackView.call_LightTip({
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
                                let _react = this;
                                _react.CallBackView.call_Dialog_Conform({
                                    isOpen: true,
                                    scroll:"body",
                                    transaction: "zoom",
                                    title: "注意",
                                    msg: "这个是一个不可逆操作，请重新确认是否执行。",
                                    ensureCallback: () => {
                                        alert("确认");
                                        _react.CallBackView.call_Dialog_Conform({isOpen:false});// 删除组件
                                    },
                                    cancelCallback: () => {
                                        alert("取消")
                                        _react.CallBackView.call_Dialog_Conform({isOpen:false});// 删除组件
                                    }
                                });
                            }}>
                                确认弹窗
                            </Button>
                            <Button variant="contained" color="primary" justify="center" onClick={() => {
                                let _react = this;
                                _react.CallBackView.call_Dialog_Conform({
                                    isOpen: true,
                                    scroll:"body",
                                    transaction: "zoom",
                                    title: "注意2",
                                    msg: "这个是一个不可逆操作，请重新确认是否执行。2",
                                    ensureCallback: () => {
                                        alert("确认2");
                                        _react.CallBackView.call_Dialog_Conform({isOpen:false});// 删除组件
                                    },
                                    cancelCallback: () => {
                                        alert("取消2")
                                        _react.CallBackView.call_Dialog_Conform({isOpen:false});// 删除组件
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
}

export default CallbackTestContainer;