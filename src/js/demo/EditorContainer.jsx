import React from "react";
import ReactDOM from "react-dom";
import BaseComponent from "../component/BaseComponent.jsx";

import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import {withStyles} from '@material-ui/core/styles';
import JssProvider from "react-jss/lib/JssProvider";
import {create} from "jss";
import {createGenerateClassName, jssPreset} from "@material-ui/core/styles";


import Paper from "@material-ui/core/es/Paper/Paper";
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/es/Typography/Typography";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import AutoComplete from "../component/input/AutoComplete.jsx";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import TextField from "@material-ui/core/es/TextField/TextField";
import Button from "@material-ui/core/es/Button/Button";

const generateClassName = createGenerateClassName({productionPrefix: "HyggeWriterComponent"});
const jss = create(jssPreset());

class EditorContainer extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            uId: "",
            token: "",
            title: "",
            summary: "",
            content: "",
            articleId: "",
            articleCategoryId: "",
            articleCategorySuggestions: []
        };
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
            <JssProvider jss={jss} generateClassName={generateClassName}>
                <MuiThemeProvider theme={this.StyleHelper.getLightTheme_Blue_Pink()}>
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
                                        <div style={{width: "100%"}}>
                                            <div className="floatLeft" style={{width: "49%"}}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="UId"
                                                    margin="normal"
                                                    variant="outlined"
                                                    onChange={this.handleInputChange.bind(this, "uId")}
                                                    value={this.state.uId}
                                                />
                                            </div>
                                            <div className="floatRight" style={{width: "49%"}}>
                                                <TextField
                                                    fullWidth
                                                    required
                                                    label="Token"
                                                    margin="normal"
                                                    variant="outlined"
                                                    onChange={this.handleInputChange.bind(this, "token")}
                                                    value={this.state.token}
                                                />
                                            </div>
                                        </div>
                                    </ListItem>
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
                                            <MuiThemeProvider theme={this.StyleHelper.getLightTheme_Green_Orange()}>
                                                <Button variant="contained" color="primary"
                                                        onClick={this.queryArticleInfo.bind(this)}>
                                                    查询
                                                </Button>
                                            </MuiThemeProvider>
                                            <Button variant="contained" color="secondary"
                                                    onClick={this.saveArticle.bind(this)}>
                                                保存
                                            </Button>
                                            <MuiThemeProvider theme={this.StyleHelper.getLightTheme_Green_Orange()}>
                                                <Button variant="contained" color="secondary"
                                                        onClick={this.updateArticle.bind(this)}>
                                                    修改
                                                </Button>
                                            </MuiThemeProvider>
                                        </div>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </MuiThemeProvider>
            </JssProvider>
        );
    }


    componentDidMount() {
        this.LogHelper.info({msg: "componentDidMount----------"});
        this.LogHelper.debug({msg: ""});
        this.queryAllBoard();
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

    handleInputChange(name, event) {
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
            properties: ""
        };
        this.HttpHelper.httpPost({
            path: "main/article",
            headers: {
                scope: "web",
                uId: (_react.state.uId == null || _react.state.uId.trim() == "") ? "U00000000" : _react.state.uId,
                token: (_react.state.token == null || _react.state.token.trim() == "") ? "0000" : _react.state.token
            },
            requestData: requestObj,
            successCallback: function (response) {
                alert("保存成功");
            },
            errorCallback: function (response) {
                alert(JSON.stringify(response));
            }
        });
    }

    updateArticle() {
        let _react = this;
        let articleCategoryId = this.文章类别.getVal();
        articleCategoryId = articleCategoryId.substr(articleCategoryId.indexOf("-") + 1);
        let requestObj = {};
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
        this.HttpHelper.httpPut({
            path: "main/article/" + _react.state.articleId,
            headers: {
                scope: "web",
                uId: (_react.state.uId == null || _react.state.uId.trim() == "") ? "U00000000" : _react.state.uId,
                token: (_react.state.token == null || _react.state.token.trim() == "") ? "0000" : _react.state.token
            },
            requestData: requestObj,
            successCallback: function (response) {
                alert("修改成功");
            },
            errorCallback: function (response) {
                alert(JSON.stringify(response));
            }
        });
    }

    queryAllBoard() {
        let _react = this;
        this.HttpHelper.httpGet({
            path: "main/article/category/U00000001?minDepth=0",
            headers: {
                scope: "web",
                uId: (this.state.uId == null || this.state.uId.trim() == "") ? "U00000000" : this.state.uId,
                token: (this.state.token == null || this.state.token.trim() == "") ? "0000" : this.state.token
            },
            successCallback: function (response) {
                let boardSuggestionsTemp = response.data.map((item) => {
                    return item.articleCategoryName + "-" + item.articleCategoryId
                })
                _react.updateState({articleCategorySuggestions: boardSuggestionsTemp});
            }
        });
    }

    queryArticleInfo() {
        let _react = this;
        this.HttpHelper.httpGet({
            path: "main/article/" + _react.state.articleId,
            headers: {
                scope: "web",
                uId: (this.state.uId == null || this.state.uId.trim() == "") ? "U00000000" : this.state.uId,
                token: (this.state.token == null || this.state.token.trim() == "") ? "0000" : this.state.token
            },
            successCallback: function (response) {
                _react.updateState({
                    title: response.data[0].title,
                    summary: response.data[0].summary,
                    content: response.data[0].content,
                    articleId: response.data[0].articleId,
                    articleCategoryId: response.data[0].articleCategoryId
                });
            }
        });
    }


}

export default EditorContainer;