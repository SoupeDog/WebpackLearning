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

class ArticleSummaryItem extends BaseComponent {
    constructor(props) {
        super(props)
        console.log("constructor----------");
    }

    componentWillMount() {
        console.log("componentWillMount----------");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextContext:" + JSON.stringify(nextContext));
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate----------");
        console.log("nextProps:" + JSON.stringify(nextProps));
        console.log("nextState:" + JSON.stringify(nextState));
        console.log("nextContext:" + JSON.stringify(nextContext));
        return true;
    }

    render() {
        return (
            <Card style={{marginBottom: "20px"}}>
                <CardActionArea style={{width: "100%", minHeight: "200px"}}  onClick={()=>{
                    this.URLHelper.openNewPage({path:"http://localhost:9000/browse.html?id="+this.props.articleId});
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
                     <span id="articlePlates">
                            {this.props.boardName == null ? "未命名板块" : this.props.boardName}
                        </span>
                    <span  className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                    <span id="articlePlates" style={{marginLeft: "5px"}}>
                    {this.props.articleCategoryName == null ? "未命名文章类别" : this.props.articleCategoryName}
                        </span>
                    {/*<Tooltip title={"最后修改日期"}>*/}
                            <span id="articleDate" style={{marginLeft: "20px"}}>
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
                    {/*</Tooltip>*/}
                    {/*<Tooltip title={"字数统计"}>*/}
                        <span id="articleWordCount">
                            <EditIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            约&nbsp;{this.props.wordCount}&nbsp;字
                        </span>
                    {/*</Tooltip>*/}
                    {/*<Tooltip title={"浏览量"}>*/}
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {this.props.pageViews < 1000 ? "1k以内" : this.props.pageViews}
                        </span>
                    {/*</Tooltip>*/}
                    {/*<Tooltip title={"评论数"}>*/}
                        <span className="articleCommentCount" style={{marginLeft: "40px"}}>
                            <CommentIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {"暂无评论"}
                        </span>
                    {/*</Tooltip>*/}
                </CardActions>
            </Card>
        );
    }

    componentDidMount() {
        console.log("componentDidMount----------");
        console.log("");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate----------");
        console.log("prevProps:" + JSON.stringify(prevProps));
        console.log("prevState:" + JSON.stringify(prevState));
        console.log("snapshot:" + JSON.stringify(snapshot));
        console.log("");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount----------");
    }
}

export default ArticleSummaryItem;