import React from "react";
import HttpHelper from "../utils/HttpHelper.jsx";
import TimeHelper from "../utils/TimeHelper.jsx";
import StyleHelper from "../utils/StyleHelper.jsx";
import PropertiesHelper from "../utils/PropertiesHelper.jsx";
import URLHelper from "../utils/URLHelper.jsx";
import LogHelper from "../utils/LogHelper.jsx";
import PageJumpingOperator from "../demo/PageJumpingOperator.jsx";

export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.HttpHelper = HttpHelper;
        this.TimeHelper = TimeHelper;
        this.StyleHelper = StyleHelper;
        this.PropertiesHelper = PropertiesHelper;
        this.URLHelper = URLHelper;
        this.LogHelper = LogHelper;
        this.PageJumpingOperator=PageJumpingOperator;
    }

    // 初始化子组件
    setParentNode({componentName, target}) {
        this[componentName] = target;
    }

    // 更新根组件 State
    updateState(data) {
        this.setState(data);
    };
}