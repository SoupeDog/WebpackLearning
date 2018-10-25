import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import classNames from "classnames";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import {withStyles} from "@material-ui/core/styles/index";

const drawerWidth = 240;
const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
});

class Menu_Top_Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "Menu_Top_Index", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "Menu_Top_Index", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "Menu_Top_Index", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "Menu_Top_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "Menu_Top_Index", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "Menu_Top_Index", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_Index", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "Menu_Top_Index", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <AppBar
                position="fixed"
                className={classNames(this.props.classes.appBar, {
                    [this.props.classes.appBarShift]: this.props.open,
                })}
            >
                <Toolbar disableGutters={!this.props.open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerOpen}
                        className={classNames(this.props.classes.menuButton, {
                            [this.props.classes.hide]: this.props.open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        我的小宅子
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "Menu_Top_Index", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "Menu_Top_Index", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "Menu_Top_Index", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "Menu_Top_Index", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "Menu_Top_Index", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "Menu_Top_Index", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(Menu_Top_Index);