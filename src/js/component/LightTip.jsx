import React from 'react';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import {withStyles} from '@material-ui/core/styles';

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
        this.MIcon = variantIcon[props.variant];
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
}

export default withStyles(styles)(LightTip);