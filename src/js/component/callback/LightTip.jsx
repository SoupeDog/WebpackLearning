import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import SnackbarContent from "@material-ui/core/es/SnackbarContent/SnackbarContent";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import CloseIcon from '@material-ui/icons/Close';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';


const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});


class LightTip extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.MIcon = variantIcon[props.variant];
        // alert("constructor");
    }

    componentWillMount() {
        // alert("componentWillMount");
    }

    render() {
        return (
            <SnackbarContent
                className={classNames(this.props.classes[this.props.variant], this.props.className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={this.props.classes.message}>
          <this.MIcon className={classNames(this.props.classes.icon, this.props.classes.iconVariant)}/>
                        {this.props.message}
        </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={this.props.classes.close}
                        onClick={this.props.onClose}
                    >
                        <CloseIcon className={this.props.classes.icon}/>
                    </IconButton>,
                ]}
            />
        );
    }

    componentDidMount() {
        // alert("componentDidMount");
    }
}

export default withStyles(styles)(LightTip);

LightTip.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};