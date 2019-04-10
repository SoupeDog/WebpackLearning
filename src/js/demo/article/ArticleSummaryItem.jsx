import React from 'react';
import LogHelper from "../../utils/LogHelper.jsx";
import PropertiesHelper from "../../utils/PropertiesHelper.jsx";
import URLHelper from "../../utils/URLHelper.jsx";
import TimeHelper from "../../utils/TimeHelper.jsx";
import PageJumpingOperator from "../../demo/api/PageJumpingOperator.jsx";
import Paper from "@material-ui/core/es/Paper/Paper";
import Card from "@material-ui/core/es/Card/Card";
import CardActionArea from "@material-ui/core/es/CardActionArea/CardActionArea";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import Typography from "@material-ui/core/es/Typography/Typography";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import defaultImage from "../../../img/gitHubLogo.png";
import Grid from "@material-ui/core/es/Grid/Grid";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";

class ArticleSummaryItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jumpingQueryString: URLHelper.getQueryString("secretKey") == null ?
                "id=" + this.props.articleSummary.articleId :
                "id=" + this.props.articleSummary.articleId + "&secretKey=" + URLHelper.getQueryString("secretKey")
        };
        this.getImage = function (properties) {
            if (PropertiesHelper.isStringNotNull(properties)) {
                return JSON.parse(properties).image;
            } else {
                return defaultImage;
            }
        }.bind(this);
        LogHelper.info({className: "ArticleSummaryItem", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "ArticleSummaryItem", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "ArticleSummaryItem", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "ArticleSummaryItem", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        if (this.props.articleSummary == null || (this.props.articleSummary != null && this.props.articleSummary.lastUpdateTs == nextProps.articleSummary.lastUpdateTs)) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.articleSummary != null) {
            return (

                <Paper elevation={2} style={{display: "flex", margin: "4px 12px", backgroundColor: "#red"}}>
                    <div style={{flexGrow: 1, width: "calc(100% - 210px)", minHeight: "150px"}}>
                        <Typography variant="h4" align={"left"} component={"div"} gutterBottom>
                            <div className="autoWrap autoOmit" style={{margin: "20px"}}>
                                <a className={"b_r"}
                                   href={PageJumpingOperator.getOpenBrowseURL({queryString: this.state.jumpingQueryString})}>{this.props.articleSummary.title}</a>
                            </div>
                        </Typography>
                        <Typography align={"left"} component={"div"}>
                            <div className="" style={{color: "#8E8E8E", margin: "20px"}}>
                                {this.props.articleSummary.summary}
                            </div>
                        </Typography>
                        <Typography align={"left"} component={"div"}>
                            <div className="" style={{color: "#8E8E8E", margin: "20px"}}>
                                <Grid id="articleInfo" item xs={12} container direction="row"
                                      justify="flex-start" alignItems="baseline" style={{lineHeight: "24px"}}>
                                    <Grid item xs={12} lg={12}>
                        <span id="articlePlates">
                            {this.props.articleSummary.boardName == null ? "未命名板块" : this.props.articleSummary.boardName}
                        </span>
                                        <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                                        <span id="articlePlates" style={{marginLeft: "5px"}}>
                             {this.props.articleSummary.articleCategoryName == null ? "未命名文章类别" : this.props.articleSummary.articleCategoryName}
                        </span>
                                    </Grid>
                                    <Grid item xs={12} lg={9} container direction="row"
                                          justify="flex-start"
                                          alignItems="flex-start"
                                    >
                                        <Tooltip title={"创建日期"}>
                            <span id="articleDate">
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {TimeHelper.formatTimeStampToString({
                                    target: this.props.articleSummary.ts,
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
                            &nbsp;{this.props.articleSummary.wordCount}&nbsp;字
                        </span>
                                        </Tooltip>
                                        <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {this.props.articleSummary.pageViews < 1000 ? "1k以内" : this.props.articleSummary.pageViews}
                        </span>
                                        </Tooltip>
                                        {/*<Tooltip title={"评论数"}>*/}
                        {/*<span id="articleCommentCount" style={{marginLeft: "40px"}}>*/}
                            {/*<CommentIcon style={{*/}
                                {/*fontSize: "12px",*/}
                                {/*color: "#aaa",*/}
                                {/*lineHeight: "40px"*/}
                            {/*}}/>&nbsp;*/}
                            {/*{"暂无评论"}*/}
                        {/*</span>*/}
                                        {/*</Tooltip>*/}
                                    </Grid>
                                </Grid>
                            </div>
                        </Typography>
                    </div>
                    <div style={{width: "200px", minWidth: "200px", margin: "25px 10px 25px 0px", height: "100px"}}>
                        <a className={"b_r"}
                           href={PageJumpingOperator.getOpenBrowseURL({queryString: this.state.jumpingQueryString})}><Card>
                            <CardActionArea>
                                <CardMedia
                                    image={this.getImage(this.props.articleSummary.properties)}
                                    title={this.props.articleSummary.title}
                                    style={{height: "100px", objectFit: 'cover'}}
                                />
                            </CardActionArea>
                        </Card>
                        </a>
                    </div>
                </Paper>
            );
        } else {
            return null;
        }
    }

    componentDidMount() {
        LogHelper.info({className: "ArticleSummaryItem", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "ArticleSummaryItem", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "ArticleSummaryItem", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "ArticleSummaryItem", msg: "componentWillUnmount----------"});
    }
}

export default ArticleSummaryItem;