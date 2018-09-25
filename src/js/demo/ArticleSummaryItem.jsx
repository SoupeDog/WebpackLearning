import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";
import Card from "@material-ui/core/es/Card/Card";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import Typography from "@material-ui/core/es/Typography/Typography";
import CardActions from "@material-ui/core/es/CardActions/CardActions";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/es/Grid/Grid";

class ArticleSummaryItem extends BaseComponent {
    constructor(props) {
        super(props)
        this.LogHelper.info({msg: "constructor----------"});
        this.LogHelper.debug({tag: "props", msg: props, isJson: true});
    }

    componentWillMount() {
        this.LogHelper.info({msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.LogHelper.info({msg: "componentWillReceiveProps----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.LogHelper.info({msg: "shouldComponentUpdate----------"});
        this.LogHelper.debug({tag: "nextProps", msg: nextProps, isJson: true});
        this.LogHelper.debug({tag: "nextState", msg: nextState, isJson: true});
        this.LogHelper.debug({tag: "nextContext", msg: nextContext, isJson: true});
        return true;
    }

    render() {
        return (
            <Card style={{marginBottom: "20px"}}>
                <CardActionArea style={{width: "100%", minHeight: "200px"}} onClick={() => {
                    this.PageJumpingOperator.openBrowse({queryString: "id=" + this.props.articleId});
                }}>
                    <CardMedia
                        image={this.props.image == null ? "https://s1.ax2x.com/2018/08/26/5Dk82K.jpg" : this.props.image}
                        title={this.props.title}
                        style={{height: "150px", objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.title == null ? "未命名标题" : this.props.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid id="articleInfo" item xs={12} container direction="row"
                          justify="flex-start" alignItems="baseline" style={{lineHeight: "24px"}}>
                        <Grid item xs={12} lg={3}>
                        <span id="articlePlates">
                            {this.props.boardName == null ? "未命名板块" : this.props.boardName}
                        </span>
                            <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                            <span id="articlePlates" style={{marginLeft: "5px"}}>
                             {this.props.articleCategoryName == null ? "未命名文章类别" : this.props.articleCategoryName}
                        </span>
                        </Grid>
                        <Grid item xs={12} lg={9} direction="row"
                              justify="flex-end"
                              alignItems="flex-start"
                        >
                            <Tooltip title={"最后修改日期"}>
                            <span id="articleDate">
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {this.TimeHelper.formatTimeStampToString({
                                    target: this.props.lastUpdateTs,
                                    type: "yyyy-mm-dd"
                                })}
                            </span>
                            </Tooltip>
                            <Tooltip title={"字数统计(近似值)"}>
                        <span id="articleWordCount" style={{marginLeft: "40px"}}>
                            <EditIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            &nbsp;{this.props.wordCount}&nbsp;字
                        </span>
                            </Tooltip>
                            <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {this.props.pageViews < 1000 ? "1k以内" : this.props.pageViews}
                        </span>
                            </Tooltip>
                            <Tooltip title={"评论数"}>
                        <span id="articleCommentCount" style={{marginLeft: "40px"}}>
                            <CommentIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {"暂无评论"}
                        </span>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        );
    }

    componentDidMount() {
        this.LogHelper.info({msg: "componentDidMount----------"});
        this.LogHelper.debug({msg: ""});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.LogHelper.info({msg: "componentDidUpdate----------"});
        this.LogHelper.debug({tag: "prevProps", msg: prevProps, isJson: true});
        this.LogHelper.debug({tag: "prevState", msg: prevState, isJson: true});
        this.LogHelper.debug({tag: "snapshot", msg: snapshot, isJson: true});
        this.LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        this.LogHelper.info({msg: "componentWillUnmount----------"});
        this.LogHelper.debug({msg: ""});
    }
}

export default ArticleSummaryItem;