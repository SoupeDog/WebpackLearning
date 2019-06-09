import '../css/index.less';
import '../css/browse.less';
import '../css/default.css';
import '../css/hyggeWriter_Markdown.less';

import React from 'react';
import ReactDOM from 'react-dom';
import CallbackTestContainer from "./test/CallbackTestContainer.jsx";
import BrowseContainer from "./src/BrowseContainer.jsx";

ReactDOM.render(<BrowseContainer/>, document.getElementById('root'));

