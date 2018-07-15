import '../css/default.css';
import '../css/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import HttpHelper from "./utils/HttpHelper.jsx";
import TimeHelper from './utils/TimeHelper.jsx';

ReactDOM.render(<span>Hello world!</span>, document.getElementById('root'));
// alert(TimeHelper.getNaturalDayTimeStamp(new Date().getTime(),5));
HttpHelper.httpGet("http://127.0.0.1:8080/extra");