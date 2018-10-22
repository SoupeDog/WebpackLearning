import React from 'react';
import ReactDOM from 'react-dom';
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import {withStyles} from "@material-ui/core/styles/index";

const styles = {
    linearProgress: {
        flexGrow: 10,
        width: "100%",
        position: "absolute",
        zIndex: 10000
    },
};

var CountArray_Loading_Linear = new Array(0);

class CallBackView extends React.Component {
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
            lightTip_Vertical: "top",
            lightTip_Horizontal: "center",
            lightTip_Visible: false,
            lightTip_Msg: "这是一条成功信息！",
            lightTip_Variant: "success"
        }
        this.props.setParentNode({componentName: this.props.componentName, target: this});
    }

    render() {
        return (
            <div id="CallbackHelper" style={{width: "100%", height: "0px"}}>
                {this.state.loading_Linear_Unknown ?
                    <LinearProgress className={this.props.classes.linearProgress} color="secondary"/> : null}
            </div>
        );
    }

    call_Loading_Circle_Interrupt(isOpen) {
        this.setState({loading_Circle_Interrupt: isOpen});
    }

    call_Loading_Linear_Unknown(isOpen) {
        let countArray = CountArray_Loading_Linear;
        if (isOpen) {
            countArray.push(0);
            console.log("add,current：" + countArray.length);
        } else {
            countArray.pop();
            console.log("remove,current：" + countArray.length);
        }
        if (countArray.length > 0) {
            if (this.state.loading_Linear_Unknown == false) {
                this.setState({loading_Linear_Unknown: true});
            }
        } else {
            if (this.state.loading_Linear_Unknown == true) {
                this.setState({loading_Linear_Unknown: false});
            }
        }
    }

    call_Dialog_Conform({isOpen, transition, title, msg, ensureCallback, cancelCallback}) {
        this.setState({
            dialog_Conform: isOpen,
            dialog_Transition: transition == null ? "fade" : transition,
            dialog_Title: title,
            dialog_Msg: msg,
            dialog_Ensure: ensureCallback,
            dialog_Cancel: cancelCallback
        });
    }

    call_LightTip({isOpen, type, msg, vertical, horizontal}) {
        let config = {
            lightTip_Visible: isOpen,
            lightTip_Variant: type,
            lightTip_Msg: msg
        };
        if (vertical != null) {
            config.lightTip_Vertical = vertical;
        }
        if (horizontal != null) {
            config.lightTip_Horizontal = horizontal;
        }
        this.setState(config);
    }
}

export default withStyles(styles)(CallBackView);