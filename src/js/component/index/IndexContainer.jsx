import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from "../BaseComponent.jsx";
import CallBackView from "../callback/CallBackView.jsx";
import Button from "@material-ui/core/es/Button/Button";
import {createMuiTheme} from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const customerTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#66bb6a',
        },
        secondary: {
            main: '#ffcc80',
        },
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
                    <Button variant="contained" color="primary" justify="center" onClick={() => {
                        let _react = this;
                        _react.CallBackView.isVisible_Loading_Circle_Interrupt(true);
                        setTimeout(function () {
                            _react.CallBackView.isVisible_Loading_Circle_Interrupt(false);
                        }, 3000);
                    }}>
                        加载
                    </Button>

                </MuiThemeProvider>
            </div>
        );
    }

    componentDidMount() {
    }
}

export default IndexContainer;