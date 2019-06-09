import React from 'react';
import '../../css/index.less';
import LogHelper from "../utils/LogHelper.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {withStyles} from "@material-ui/core";
import IndexAppBar from "./IndexAppBar.jsx";
import IndexLeftMenu from "./IndexLeftMenu.jsx";
import IndexBoardTabs from "./IndexBoardTabs.jsx";
import PageMenu from "./PageMenu.jsx";

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
            leftMenuIsOpen: false,
            currentUser: null
        };

        this.handleDrawerOpen = function () {
            this.setState({leftMenuIsOpen: true});
        }.bind(this);

        this.handleDrawerClose = function () {
            this.setState({leftMenuIsOpen: false});
        }.bind(this);
        this.setStateToRoot = function (properties) {
            this.setState(properties);
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
                    <IndexAppBar leftMenuIsOpen={this.state.leftMenuIsOpen}
                                 currentUser={this.state.currentUser}
                                 handleDrawerOpen={this.handleDrawerOpen}
                                 setStateToRoot={this.setStateToRoot}/>
                    <IndexLeftMenu leftMenuIsOpen={this.state.leftMenuIsOpen}
                                   handleDrawerClose={this.handleDrawerClose}/>
                    <main className={this.props.classes.content}>
                        <MuiThemeProvider theme={StyleHelper.getLightTheme_Blue_Pink()}>
                            <div className={this.props.classes.toolbar}/>
                            <IndexBoardTabs/>
                        </MuiThemeProvider>
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
        UserAPIOperator.preLogin({setStateToRoot: this.setStateToRoot});
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