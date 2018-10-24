import React from 'react';
import LogHelper from "../utils/LogHelper.jsx";

export default class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        document.getElementById('root').innerHTML="";// 清理初始页面
        LogHelper.info({className: "BaseComponent", msg: "constructor----------"});
        LogHelper.debug({tag: "props", msg: props, isJson: false});
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