import '../css/default.css';
import '../css/index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import TimeHelper from './utils/TimeHelper.jsx';

ReactDOM.render(<span>Hello world!</span>, document.getElementById('root'));
alert(TimeHelper.formatTimeStampToString(1531473672000, "yyyy-mm-dd hh:mm:ss"));