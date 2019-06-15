import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import PropertiesHelper from "../utils/PropertiesHelper.jsx";

class LoinForm extends React.Component {

    constructor(props) {
        super(props);
        this.stateCheckPropertiesList = new Array("uId", "pw");
        this.propsCheckPropertiesList = new Array("isLoginFormOpen");
        this.state = {
            uId: "",
            pw: ""
        };
        this.handleInputChange = function (name, event) {
            this.setState({
                [name]: event.target.value,
            });
        }.bind(this);
        this.tryToLogin = function () {
            UserAPIOperator.login({
                uId: this.state.uId,
                pw: this.state.pw,
                setStateToRoot: this.props.setStateToRoot
            });
            this.props.loginFormClose();
        }.bind(this);
        LogHelper.info({className: "LoinForm", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "LoinForm", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "LoinForm", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "LoinForm", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LoinForm", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "LoinForm", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "LoinForm", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "LoinForm", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "LoinForm", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return PropertiesHelper.needUpdate({
            componentName: "IndexAppBar",
            currentProps: this.props,
            nextProps: nextProps,
            propsPropertiesList: this.propsCheckPropertiesList,
            nextState: nextState,
            currentState: this.state,
            statePropertiesList: this.stateCheckPropertiesList
        });
    }

    render() {
        return (
            <Dialog
                open={this.props.isLoginFormOpen}
                onClose={this.props.loginFormClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"账号密码登录"}</DialogTitle>
                <DialogContent>
                    <TextField
                        fullWidth
                        required
                        label="用户名"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleInputChange.bind(this, "uId")}
                        value={this.state.uId}
                    />
                    <TextField
                        fullWidth
                        required
                        type="password"
                        label="密码"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleInputChange.bind(this, "pw")}
                        value={this.state.pw}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.tryToLogin} color="primary">
                        登录
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "LoinForm", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "LoinForm", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "LoinForm", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "LoinForm", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "LoinForm", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "LoinForm", msg: "componentWillUnmount----------"});
    }
}

export default LoinForm;