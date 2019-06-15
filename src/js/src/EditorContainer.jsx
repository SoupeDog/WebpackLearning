import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";
import HttpHelper from "../utils/HttpHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import URLHelper from "../utils/URLHelper.jsx";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import MarkdownHelper from "../utils/MarkdownHelper.jsx";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import ListItem from "@material-ui/core/ListItem/ListItem";
import List from "@material-ui/core/List/List";
import TextField from "@material-ui/core/TextField/TextField";
import Paper from "@material-ui/core/Paper/Paper";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Typography from "@material-ui/core/Typography/Typography";
import AutoComplete from "../component/input/AutoComplete.jsx";
import BaseComponent from "../component/BaseComponent.jsx";
import UserAPIOperator from "./api/UserAPIOperator.jsx";
import CallBackViewHelper from "../utils/CallBackViewHelper.jsx";
import CallBackView from "../component/CallBackView.jsx";

class EditorContainer extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            summary: "",
            content: "",
            articleId: "",
            articleCategoryId: "",
            articleCategorySuggestions: []
        };
        this.previewArticle = function () {
            MarkdownHelper.formatToHtml({
                content: this.state.content,
                containerId: "article_Content",
                useCatalog: false
            });
        }.bind(this);
        this.getHeaders = function () {
            if (UserAPIOperator.getLocalUserUId() == null) {
                return {
                    scope: "web",
                    secretKey: URLHelper.getQueryString("secretKey")
                }
            } else {
                return {
                    uId: UserAPIOperator.getLocalUserUId(),
                    token: UserAPIOperator.getLocalUserToken(),
                    scope: "web",
                    secretKey: URLHelper.getQueryString("secretKey")
                };
            }
        }.bind(this);
        LogHelper.info({className: "EditorContainer", msg: "constructor----------"});
    }

    componentWillMount() {
        LogHelper.info({className: "EditorContainer", msg: "componentWillMount----------"});
    }

    componentWillReceiveProps(nextProps, nextContext) {
        LogHelper.info({className: "EditorContainer", msg: "componentWillReceiveProps----------"});
        LogHelper.debug({className: "EditorContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "EditorContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        LogHelper.info({className: "EditorContainer", msg: "shouldComponentUpdate----------"});
        LogHelper.debug({className: "EditorContainer", tag: "nextProps", msg: nextProps, isJson: true});
        LogHelper.debug({className: "EditorContainer", tag: "nextState", msg: nextState, isJson: true});
        LogHelper.debug({className: "EditorContainer", tag: "nextContext", msg: nextContext, isJson: true});
        LogHelper.debug({msg: ""});
        return true;
    }

    render() {
        return (
            <MuiThemeProvider theme={StyleHelper.getLightTheme_Blue_Pink()}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                    spacing={0}
                >
                    <Grid item xs={12}>
                        <AppBar position="static" color={"primary"}>
                            <Typography variant="h6" align={"center"} color="inherit">
                                编辑博文
                            </Typography>
                        </AppBar>
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <Paper elevation={8} style={{marginTop: "20px"}}>
                            <List>
                                <ListItem>
                                    <TextField
                                        fullWidth
                                        required
                                        label="文章唯一标识"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleInputChange.bind(this, "articleId")}
                                        value={this.state.articleId}
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        fullWidth
                                        required
                                        label="文章标题"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleInputChange.bind(this, "title")}
                                        value={this.state.title}
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        fullWidth
                                        required
                                        multiline
                                        label="摘要"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleInputChange.bind(this, "summary")}
                                        value={this.state.summary}
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        fullWidth
                                        required
                                        multiline
                                        label="内容"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.handleInputChange.bind(this, "content")}
                                        value={this.state.content}
                                    />
                                </ListItem>
                                <ListItem>
                                    <AutoComplete isMultiple={false}
                                                  fullWidth
                                                  componentName={"文章类别"}
                                                  setParentNode={this.setParentNode.bind(this)}
                                                  error={false} label={"文章类别"}
                                                  placeholder={null}
                                                  suggestions={this.state.articleCategorySuggestions}
                                    />
                                </ListItem>
                            </List>
                            <List>
                                <ListItem>
                                    <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                                        <MuiThemeProvider theme={StyleHelper.getLightTheme_Green_Orange()}>
                                            <Button variant="contained" color="primary"
                                                    onClick={this.queryArticleInfo.bind(this)}>
                                                查询
                                            </Button>
                                        </MuiThemeProvider>
                                        <Button variant="contained" color="secondary"
                                                onClick={this.saveArticle.bind(this)}>
                                            保存
                                        </Button>
                                        <MuiThemeProvider theme={StyleHelper.getLightTheme_Green_Orange()}>
                                            <Button variant="contained" color="secondary"
                                                    onClick={this.updateArticle.bind(this)}>
                                                修改
                                            </Button>
                                        </MuiThemeProvider>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div id={"article_Content"} className="hyggeWriter_Markdown_Reader"></div>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
                <CallBackView/>
            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        this.previewArticle();
        LogHelper.info({className: "EditorContainer", msg: "componentDidMount----------"});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        LogHelper.info({className: "EditorContainer", msg: "componentDidUpdate----------"});
        LogHelper.debug({className: "EditorContainer", tag: "prevProps", msg: prevProps, isJson: true});
        LogHelper.debug({className: "EditorContainer", tag: "prevState", msg: prevState, isJson: true});
        LogHelper.debug({className: "EditorContainer", tag: "snapshot", msg: snapshot, isJson: true});
        LogHelper.debug({msg: ""});
    }

    componentWillUnmount() {
        LogHelper.info({className: "EditorContainer", msg: "componentWillUnmount----------"});
    }

    handleInputChange(name, event) {
        let _react = this;
        if (name == "content") {
            window.setTimeout(() => {
                _react.previewArticle();
            }, 500);
        }
        this.setState({
            [name]: event.target.value,
        });
    };

    saveArticle() {
        let _react = this;
        let articleCategoryId = this.文章类别.getVal();
        articleCategoryId = articleCategoryId.substr(articleCategoryId.indexOf("-") + 1);
        let requestObj = {
            title: _react.state.title,
            uId: _react.state.uId,
            articleCategoryId: articleCategoryId,
            summary: _react.state.summary,
            content: _react.state.content,
            properties: "{\"image\":\"https://www.xavierwang.cn/images/9da5c6815907412a9fb55cb6b817a18c_L.jpg\"}"
        };
        HttpHelper.httpPost({
            path: "article-service/main/article",
            headers: this.getHeaders(),
            requestData: requestObj,
            successCallback: function (response) {
                CallBackViewHelper.call_LightTip({isOpen: true, type: "success", msg: "保存成功"});
            },
            errorCallback: function (response) {
                CallBackViewHelper.call_LightTip({isOpen: true, type: "error", msg: JSON.stringify(response)});
            }
        });
    }

    updateArticle() {
        let _react = this;
        let articleCategoryId = this.文章类别.getVal();
        articleCategoryId = articleCategoryId.substr(articleCategoryId.indexOf("-") + 1);
        let requestObj = {};
        requestObj.ts = new Date().getTime();
        if (_react.state.title != null && _react.state.title.trim() != "") {
            requestObj.title = _react.state.title;
        }
        if (_react.state.articleCategoryId != null && _react.state.articleCategoryId.trim() != "") {
            requestObj.articleCategoryId = articleCategoryId;
        }
        if (_react.state.summary != null && _react.state.summary.trim() != "") {
            requestObj.summary = _react.state.summary;
        }
        if (_react.state.content != null && _react.state.content.trim() != "") {
            requestObj.content = _react.state.content;
        }
        HttpHelper.httpPut({
            path: "article-service/main/article/" + _react.state.articleId,
            headers: this.getHeaders(),
            requestData: requestObj,
            successCallback: function (response) {
                CallBackViewHelper.call_LightTip({isOpen: true, type: "success", msg: "修改"});
            },
            errorCallback: function (response) {
                CallBackViewHelper.call_LightTip({isOpen: true, type: "error", msg: JSON.stringify(response)});
            }
        });
    }

    queryAllArticleCategory() {
        let _react = this;
        HttpHelper.httpGet({
            path: "article-service/main/article/category/all",
            headers: this.getHeaders(),
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                let boardSuggestionsTemp = response.data.map((item) => {
                    return item.articleCategoryName + "-" + item.articleCategoryId
                });
                _react.updateState({articleCategorySuggestions: boardSuggestionsTemp});
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }

    queryArticleInfo() {
        let _react = this;
        console.log(this.getHeaders());
        _react.queryAllArticleCategory();
        HttpHelper.httpGet({
            path: "article-service/main/article/" + _react.state.articleId,
            headers: this.getHeaders(),
            requestBefore: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(true);
            },
            successCallback: function (response) {
                _react.updateState({
                    title: response.data.title,
                    summary: response.data.summary,
                    content: response.data.content,
                    articleId: response.data.articleId,
                    articleCategoryId: response.data.articleCategoryId
                });
                window.setTimeout(() => {
                    _react.previewArticle();
                }, 500);
            },
            finallyCallback: function () {
                CallBackViewHelper.call_Loading_Linear_Unknown(false);
            }
        });
    }
}

export default EditorContainer;