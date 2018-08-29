import '../css/index.less';
import '../css/default.css';
import '../css/hyggeWriter_Markdown.less';

import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveContainer from "./demo/ResponsiveContainer.jsx";
import IndexContainer from "./demo/IndexContainer.jsx";
import HW_Menu from "./component/HW_Menu.jsx";
import BrowseContainer from "./demo/BrowseContainer.jsx";

ReactDOM.render(<ResponsiveContainer />, document.getElementById('root'));
// ReactDOM.render(<BrowseContainer />, document.getElementById('root'));

