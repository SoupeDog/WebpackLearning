
import '../css/default.css';
import '../css/index.less';
import '../css/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from "./HelloWord.jsx";

const callback = function () {
    console.log("页面依赖加载完成");
};

ReactDOM.render(<IndexContainer/>, document.getElementById('root'), callback);