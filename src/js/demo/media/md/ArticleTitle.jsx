import React from 'react';
import LogHelper from "../../../utils/LogHelper.jsx";
import TimeHelper from "../../../utils/TimeHelper.jsx";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Grid from "@material-ui/core/es/Grid/Grid";
import Chip from "@material-ui/core/es/Chip/Chip";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from "@material-ui/core/styles/index";
import Hidden from "@material-ui/core/es/Hidden/Hidden";

const styles = theme => ({
    articleHeaderRow: {
        display: "inline-block",
        float: "left"
    },
    articleTitle: {
        fontSize: "60px",
        fontWeight: 800,
        color: "#000",
        lineHeight: "100px"
    },
    articleTitle_Phone: {
        fontSize: "20px",
        fontWeight: 800,
        lineHeight: "60px"
    },
    articleInfo: {
        fontSize: "14px",
        color: "#aaa",
        lineHeight: "40px"
    },
    tag_Box: {},
    tag: {
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "16px"
    },
    tag_Avatar: {
        width: "40px",
        height: "40px"
    }
});

class ArticleTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        LogHelper.info({className: "ArticleTitle", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleTitle", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.article.lastUpdateTs == nextProps.article.lastUpdateTs) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        return (
            <Grid item xs={12} container direction="row" justify="flex-start" alignItems="baseline">
                <Hidden mdDown>
                    <Grid id="title" className={this.props.classes.articleTitle} item xs={12}>{this.props.article.title}</Grid>
                </Hidden>
                <Hidden lgUp>
                    <div id="title" className={this.props.classes.articleTitle_Phone}>{this.props.article.title}</div>
                </Hidden>
                <Grid id="articleTags" className={this.props.classes.tag_Box} item xs={12} container>
                    <Chip className={this.props.classes.tag} clickable label="Tag 功能待上线" color="secondary"
                          avatar={<Avatar className={this.props.classes.tag_Avatar}
                                          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535520657529&di=78d823beb3585733d9d56375fb5d7975&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F54%2F42%2F83574716ee2ac08.jpg"/>}/>
                </Grid>
                <Grid id="articleInfo" item xs={12} className={this.props.classes.articleInfo} container direction="row"
                      justify="flex-start" alignItems="baseline">
                    <Grid item xs={12} lg={4}>
                        <span id="articlePlates">
                            {this.props.article.boardName}
                        </span>
                        <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                        <span id="articlePlates" style={{marginLeft: "5px"}}>
                            {this.props.article.articleCategoryName}
                        </span>
                        <Tooltip title={"创建日期"}>
                            <span id="articleDate" style={{marginLeft: "20px"}}>
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {TimeHelper.formatTimeStampToString({
                                    target: this.props.article.ts == null ? 0 : this.props.article.ts,
                                    type: "yyyy-mm-dd"
                                })}
                            </span>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <Tooltip title={"字数统计(近似值)"}>
                        <span id="articleWordCount">
                            <EditIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            &nbsp;{this.props.article.wordCount}&nbsp;字
                        </span>
                        </Tooltip>
                        <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {this.props.article.pageViews < 1000 ? "1k以内" : this.props.article.pageViews}
                        </span>
                        </Tooltip>
                        <Tooltip title={"评论数"}>
                        <span id="articleCommentCount" style={{marginLeft: "40px"}}>
                            <CommentIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {0}
                        </span>
                        </Tooltip>
                    </Grid>
                    {/*<Grid item xs={12} className={"autoWrap"} style={{lineHeight: "20px"}}>*/}
                        {/*请尊重笔者的劳动成果，如需转载，请先联系我，并声明文章来源---*/}
                        {/*{window.location.href}*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
        );
    }

    componentDidMount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleTitle", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleTitle", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleTitle", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleTitle", msg: "componentWillUnmount----------"});
    }
}

export default withStyles(styles)(ArticleTitle);