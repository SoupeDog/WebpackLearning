import '../css/index.less';
import '../css/default.css';
import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from "./component/index/IndexContainer.jsx";
import ResponsiveContainer from "./demo/ResponsiveContainer.jsx";

// ReactDOM.render(<IndexContainer />, document.getElementById('root'));
ReactDOM.render(<ResponsiveContainer />, document.getElementById('root'));

