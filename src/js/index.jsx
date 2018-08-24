import '../css/index.less';
import '../css/default.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveContainer from "./demo/ResponsiveContainer.jsx";
import IndexContainer from "./demo/IndexContainer.jsx";
import AutoComplete from "./component/input/AutoComplete.jsx";

// ReactDOM.render(<IndexContainer />, document.getElementById('root'));
// ReactDOM.render(<ResponsiveContainer />, document.getElementById('root'));
ReactDOM.render(<AutoComplete />, document.getElementById('root'));

