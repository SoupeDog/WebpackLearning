import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import RightMenu_Index from "./menu/RightMenu_Index.jsx";
import BoardView from "./article/BoardView.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        width: "0px"  // 因为 flexGrow 实际宽度会变成0px+ 父容器剩余部分
    },
    main_Container: {
        display: 'flex',
    }
});

class IndexMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ts: new Date().getDate()
        };
        LogHelper.info({className: "IndexMain", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "IndexMain", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "IndexMain", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "IndexMain", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexMain", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "IndexMain", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "IndexMain", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "IndexMain", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "IndexMain", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.state.ts == nextState.ts) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className={this.props.classes.content}>
                <div className={this.props.classes.toolbar}/>
                {/*margin-top 用*/}
                <div className={this.props.classes.main_Container}>
                    <MuiThemeProvider theme={StyleHelper.getLightTheme_Blue_Pink()}>
                        <div className="floatLeft" style={{flexGrow: 1, width: "0px"}}>
                            <BoardView boardInfoList={[
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
                                    boardName: "随笔",
                                    lastUpdateTs: 1537782729174,
                                    ts: 1537782729174
                                }
                            ]}
                            />
                        </div>
                        <div style={{width: "240px"}}>
                            <RightMenu_Index/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "IndexMain", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "IndexMain", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "IndexMain", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "IndexMain", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "IndexMain", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "IndexMain", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(IndexMain);