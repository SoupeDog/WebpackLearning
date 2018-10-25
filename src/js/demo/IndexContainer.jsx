import React from 'react';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";


const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Typography from "@material-ui/core/es/Typography/Typography";

import {withStyles} from "@material-ui/core/styles/index";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";
import Menu_Top_Index from "./header/Menu_Top_Index.jsx";
import LeftDrawerMenu_Index from "./header/LeftDrawerMenu_Index.jsx";

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
        padding: theme.spacing.unit * 3,
    },
});


class IndexContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleDrawerOpen = function () {
            this.setState({open: true});
        }.bind(this);
        this.handleDrawerClose = function () {
            this.setState({open: false});
        }.bind(this);
        LogHelper.info({className: "indexContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "indexContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "indexContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "indexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "indexContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "indexContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={StyleHelper.getLightTheme_Black_Purple()}>
                    <div className={this.props.classes.root}>
                        <Menu_Top_Index open={this.state.open} handleDrawerOpen={this.handleDrawerOpen}/>
                        <LeftDrawerMenu_Index open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>
                        <main className={this.props.classes.content}>
                            <div className={this.props.classes.toolbar}/>
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                                elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                                hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                                velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                                Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                                viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                                Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                                at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                                ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                            </Typography>
                            <Typography paragraph>
                                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                                sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                                In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                                viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                                ultrices sagittis orci a.
                            </Typography>
                        </main>
                    </div>
                    <CallBackView/>
                </MuiThemeProvider>
            </JssProvider>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "indexContainer", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "indexContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "indexContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "indexContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "indexContainer", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexContainer);