import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography/Typography";
import {withStyles} from "@material-ui/core";
import IndexAppBar from "./IndexAppBar.jsx";
import IndexLeftMenu from "./IndexLeftMenu.jsx";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});


class IndexContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftMenuIsOpen: false
        };

        this.handleDrawerOpen = function () {
            this.setState({leftMenuIsOpen: true});
        }.bind(this);

        this.handleDrawerClose = function () {
            this.setState({leftMenuIsOpen: false});
        }.bind(this);
        LogHelper.info({className: "IndexContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                <CssBaseline/>
                <div className={this.props.classes.root}>
                    <IndexAppBar leftMenuIsOpen={this.state.leftMenuIsOpen} handleDrawerOpen={this.handleDrawerOpen}/>
                    <IndexLeftMenu leftMenuIsOpen={this.state.leftMenuIsOpen} handleDrawerClose={this.handleDrawerClose}/>
                    <main className={this.props.classes.content}>
                        <div className={this.props.classes.toolbar}/>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                            donec massa sapien faucibus et molestie ac.
                        </Typography>
                        <Typography paragraph>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </main>
                </div>
                {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                {/*UserAPIOperator.login({uId: "U00000001", pw: "000000"});*/}
                {/*}}>*/}
                {/*登录*/}
                {/*</Button>*/}
                {/*<Button variant="contained" color="primary" justify="center" onClick={() => {*/}
                {/*UserAPIOperator.logOut();*/}
                {/*}}>*/}
                {/*注销*/}
                {/*</Button>*/}
                <CallBackView/>
            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexContainer", msg: "componentDidMount----------"});
        // UserAPIOperator.login({uId: "U00000001", pw: "000000"});
        UserAPIOperator.preLogin();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexContainer", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexContainer);