import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import CallBackView from "../component/callback/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix:"HyggeWriterComponent"});
const jss = create(jssPreset());


class ResponsiveContainer extends BaseComponent {

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
                    </MuiThemeProvider>
                </JssProvider>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default ResponsiveContainer;