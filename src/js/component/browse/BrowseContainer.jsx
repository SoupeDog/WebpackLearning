import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../BaseComponent.jsx";
import CallBackView from "../callback/CallBackView.jsx";
import {createMuiTheme} from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import lightGreen from "@material-ui/core/es/colors/lightGreen";
import yellow from "@material-ui/core/es/colors/yellow";
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({productionPrefix:"HyggeWriterComponent"});
const jss = create(jssPreset());

const customerTheme = createMuiTheme({
    palette: {
        primary: lightGreen,
        secondary: yellow,
    },
});

class BrowseContainer extends BaseComponent {

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

export default BrowseContainer;