import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Typography from "@material-ui/core/es/Typography/Typography";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import AccountCircle from "@material-ui/icons/es/AccountCircle";
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuIcon from '@material-ui/icons/Menu';
import BaseComponent from "./BaseComponent.jsx";
import {withStyles} from "@material-ui/core/styles/index";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    }
};

class HW_Menu extends BaseComponent {

    constructor(props) {
        super(props)
        this.state = {
            appBarClassName: "backgroundTransparent",
            auth: true,
            anchorEl: null,
            elevation: 0
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextContext:" + JSON.stringify(nextContext));
    }

    render() {
        return (
            <AppBar position="fixed" className={this.state.appBarClassName}
                    elevation={this.state.elevation}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={() => {
                        this.props.updateState({leftMenu_Hide: !this.props.leftMenu_Hide});
                        alert(JSON.stringify(this.props.WindowsScrollHelper.getFunctionMap()));
                    }}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                        我的小宅子
                    </Typography>
                    {this.state.auth && (
                        <div>
                            <IconButton
                                aria-owns={Boolean(this.state.anchorEl) ? 'menu-appbar' : null}
                                aria-haspopup="true"
                                onClick={
                                    // alert(window.scrollY);
                                    this.handleUserMenu.bind(this)

                                }
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(this.state.anchorEl)}
                                onClose={() => {
                                    this.setState({anchorEl: null});
                                }}
                            >
                                <MenuItem onClick={() => {
                                    this.setState({anchorEl: null});
                                }}>注销</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        );
    }

    topBarHide(currentY) {
        if (currentY > 230) {
            this.setState({elevation: 1, appBarClassName: ""});
        } else {
            this.setState({elevation: 0, appBarClassName: "backgroundTransparent"});
        }
    }


    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
        this.props.WindowsScrollHelper.addCallback("topBar是否隐藏", this.topBarHide.bind(this));
    }

    handleUserMenu(event) {
        this.setState({anchorEl: event.currentTarget});
    };
}

export default withStyles(styles)(HW_Menu);