import React from 'react';
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import LogHelper from "../../utils/LogHelper.jsx";
import StyleHelper from "../../utils/StyleHelper.jsx";

class Dialog_Conform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.handelEnsure = this.handelEnsure.bind(this);
        LogHelper.info({className: "Dialog_Conform", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "Dialog_Conform", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "Dialog_Conform", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "Dialog_Conform", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Dialog_Conform", tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "Dialog_Conform", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "Dialog_Conform", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Dialog_Conform", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "Dialog_Conform", tag: "nextContext", msg: nextContext, isJson: true});
        if (this.state.open == nextProps.open &&
            this.props.title == nextProps.title &&
            this.props.transition == nextProps.transition &&
            this.props.msg == nextProps.msg) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Dialog
                open={this.state.open}
                TransitionComponent={StyleHelper.getTransitionByName(this.props.transition)}
                keepMounted
                scroll={this.props.scroll == null ? "paper" : this.props.scroll}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {this.props.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {this.props.msg}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handelEnsure} color="primary">
                        确定
                    </Button>
                    <Button onClick={this.handleClose.bind(this)} color="secondary">
                        取消
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }


    componentDidMount() {
        LogHelper.info({className: "Dialog_Conform", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "Dialog_Conform", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "Dialog_Conform", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "Dialog_Conform", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "Dialog_Conform", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "Dialog_Conform", msg: "componentWillUnmount----------"});
    }

    hideDialog() {
        this.setState({open: false});
    }

    handelEnsure() {
        if (this.props.ensure != null) {
            this.hideDialog();
            this.props.ensure();
        } else {
            this.hideDialog();
        }
    }

    handleClose() {
        if (this.props.cancel != null) {
            this.hideDialog();
            this.props.cancel();
        } else {
            this.hideDialog();
        }
    }
}

export default Dialog_Conform;