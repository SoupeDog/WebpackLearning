import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from "prop-types";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import Fade from "@material-ui/core/es/Fade/Fade";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import Grow from "@material-ui/core/es/Grow/Grow";
import Slide from "@material-ui/core/es/Slide/Slide";
import Zoom from "@material-ui/core/es/Zoom/Zoom";

const currentTransition = {
    fade: Fade,
    collapse: Collapse,
    grow: Grow,
    slide: Slide,
    zoom: Zoom,
};


class Dialog_Conform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                TransitionComponent={currentTransition[this.props.transition]}
                keepMounted
                onClose={this.handleClose.bind(this)}
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
                    <Button onClick={this.handelEnsure.bind(this)} color="primary">
                        确定
                    </Button>
                    <Button onClick={this.handleClose.bind(this)} color="secondary">
                        取消
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }

    handelEnsure() {
        if (this.props.ensure != null) {
            this.props.ensure();
        }
        if (this.props != null) {
            this.props.call_Dialog_Conform({
                isOpen: false,
                transition: this.props.transition,
                title: this.props.title,
                msg: this.props.msg,
                ensure: null,
                cancel: null
            });
        }
    }

    handleClose() {
        if (this.props.cancel != null) {
            this.props.cancel();
        }
        if (this.props != null) {
            this.props.call_Dialog_Conform({
                isOpen: false,
                transition: this.props.transition,
                title: this.props.title,
                msg: this.props.msg,
                ensureCallback: null,
                cancelCallback: null
            });
        }
    }
}

export default Dialog_Conform;

// Dialog_Conform.propTypes = {
//     open: PropTypes.bool,
//     transition: PropTypes.string,
//     title: PropTypes.string,
//     msg: PropTypes.string,
//     ensure: PropTypes.func,
//     cancel: PropTypes.func
// };