import '../css/index.less';
import '../css/default.css';

import React from 'react';
import ReactDOM from 'react-dom';
import CallbackTestContainer from "./test/CallbackTestContainer.jsx";
// import BrowseContainer from "./demo/BrowseContainer.jsx";
// import IndexContainer from "./demo/IndexContainer.jsx";
const isPC = !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i));
ReactDOM.render(<CallbackTestContainer isPC={isPC}/>, document.getElementById('root'));

