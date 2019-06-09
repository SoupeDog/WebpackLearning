import React from 'react';
import '../../css/index.less';
import LogHelper from "../utils/LogHelper.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import {withStyles} from "@material-ui/core";
import IndexAppBar from "./index/IndexAppBar.jsx";
import IndexLeftMenu from "./index/IndexLeftMenu.jsx";
import IndexBoardTabs from "./index/IndexBoardTabs.jsx";
import Grid from "@material-ui/core/Grid/Grid";

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
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                                spacing={5}
                            >
                                <Grid item xs={10}>
                                    <IndexBoardTabs boardList={[
                                        {
                                            boardId: "0ef526a3140a46cb94d458f7d506cfe3",
                                            uId: "U00000001",
                                            boardName: "技术",
                                            lastUpdateTs: 1537782719374,
                                            ts: 1537782719374
                                        },
                                        {
                                            boardId: "744ed9f224d74827a12db8ec97b6975b",
                                            uId: "U00000001",
                                            boardName: "非技术",
                                            lastUpdateTs: 1537782729174,
                                            ts: 1537782729174
                                        }
                                    ]}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <div style={{backgroundColor: "#333"}}>asdasd</div>
                                </Grid>
                            </Grid>

                        </MuiThemeProvider>
                    </main>
                </div>
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