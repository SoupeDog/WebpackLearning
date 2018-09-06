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
            <Card>
                <CardActionArea style={{width:"100%"}}>
                    <CardMedia
                        // image="https://s1.ax2x.com/2018/08/26/5Dk82K.jpg"
                        image="https://s1.ax2x.com/2018/08/26/5Dk82K.jpg"
                        title="Contemplative Reptile"
                        style={{height:"150px", objectFit: 'cover'}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            MD 语法样例，标题要长，这样够长了吗？
                        </Typography>
                        {/*<Typography component="p" style={{textIndent:"2em"}}>*/}
                            {/*示例文档，其实就是测试下 MD 语法解析器是否有什么毛病，目前看来没有什么大问题*/}
                            {/*示例文档，其实就是测试下 MD 语法解析器是否有什么毛病，目前看来没有什么大问题*/}
                            {/*示例文档，其实就是测试下 MD 语法解析器是否有什么毛病，目前看来没有什么大问题*/}
                            {/*示例文档，其实就是测试下 MD 语法解析器是否有什么毛病，目前看来没有什么大问题*/}
                            {/*示例文档，其实就是测试下 MD 语法解析器是否有什么毛病，目前看来没有什么大问题*/}
                        {/*</Typography>*/}
                    </CardContent>
                </CardActionArea>
                <CardActions>
                     <span id="articlePlates">
                            {"技术"}
                        </span>
                    <span className="separate" style={{marginLeft: "5px"}}>
                            /
                        </span>
                    <span id="articlePlates" style={{marginLeft: "5px"}}>
                            {"软件使用"}
                        </span>
                    <Tooltip title={"最后修改日期"}>
                            <span id="articleDate" style={{marginLeft: "20px"}}>
                                <AccessTimeIcon style={{
                                    fontSize: "12px",
                                    color: "#aaa",
                                    lineHeight: "40px"
                                }}/>&nbsp;
                                {this.TimeHelper.formatTimeStampToString({
                                    target: new Date().getTime(),
                                    type: "yyyy-mm-dd"
                                })}
                            </span>
                    </Tooltip>
                    <Tooltip title={"字数统计"}>
                        <span id="articleWordCount">
                            <EditIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            约&nbsp;{1500}&nbsp;字
                        </span>
                    </Tooltip>
                    <Tooltip title={"浏览量"}>
                        <span id="articlePageViewsCount" style={{marginLeft: "40px"}}>
                            <VisibilityIcon style={{
                                fontSize: "12px",
                                color: "#aaa",
                                lineHeight: "40px"
                            }}/>&nbsp;
                            {"1k以内"}
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