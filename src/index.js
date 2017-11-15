var React = require('react');
var ReactDom = require('react-dom');
require("./index.css")

import {
  App
} from './components';

ReactDom.render(
  <App />,
  document.getElementById("root")
);
