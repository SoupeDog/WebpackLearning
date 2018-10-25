import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";
import Grid from "@material-ui/core/es/Grid/Grid";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import TOCIcon from '@material-ui/icons/toc';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import WindowsEventHelper from "../../../utils/WindowsEventHelper.jsx";

class ArticleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            needFixed: window.scrollY > 370
        };
        this.scrollToTop = function () {
            window.scrollTo(0, 0);
        }.bind(this);
        LogHelper.info({className: "ArticleMenu", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleMenu", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleMenu", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleMenu", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleMenu", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleMenu", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleMenu", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.catalogIsOpen == nextProps.catalogIsOpen &&
            this.state.needFixed == nextState.needFixed) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <div id="article_RightMenu" style={{
                position: this.state.needFixed ? "fixed" : "static",
                right: this.props.catalogIsOpen ? "2%" : "2.5%",
                marginTop: this.state.needFixed ? "0px" : "400px"
            }}>
                <Grid item xs={12} container spacing={0} direction="column" justify="flex-start">
                    <Grid item>
                        <Tooltip title={this.props.catalogIsOpen ? "收起目录" : "展开目录"} placement="left">
                            <IconButton variant="outlined" color="secondary"
                                        style={{display: "block", margin: "0px auto"}}
                                        onClick={this.props.catalogTrigger}>
                                <TOCIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="返回顶部" placement="left">
                            <IconButton variant="outlined" color="secondary"
                                        style={{display: "block", margin: "0px auto"}}
                                        onClick={this.scrollToTop}>
                                <ArrowUpwardIcon/>
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </div>
        );
    }

    componentDidMount() {
        let _react = this;
        WindowsEventHelper.addCallback_Scroll({
            name: "文章菜单 fixed 判定", delta: 50, callbackFunction: function ({currentScrollY}) {
                if (currentScrollY > 370) {
                    _react.setState({needFixed: true});
                } else {
                    _react.setState({needFixed: false});
                }
            }
        });
        LogHelper.info({className: "ArticleMenu", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleMenu", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleMenu", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleMenu", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleMenu", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleMenu", msg: "componentWillUnmount----------"});
    }
}

export default ArticleMenu;