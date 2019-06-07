import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import AppBar from "@material-ui/core/AppBar/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";

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
        marginRight: 36,
    },
    hide: {
        display: 'none',
    }
});


class IndexAppBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "IndexAppBar", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexAppBar", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <AppBar
                position="fixed"
                className={clsx(this.props.classes.appBar, {
                    [this.props.classes.appBarShift]: this.props.leftMenuIsOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={this.props.handleDrawerOpen}
                        edge="start"
                        className={clsx(this.props.classes.menuButton, {
                            [this.props.classes.hide]: this.props.leftMenuIsOpen,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        我的小宅子
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexAppBar", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexAppBar", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexAppBar", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexAppBar", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexAppBar", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexAppBar);