var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./routes/routes');

require('./styles/normalize.css');
require('./styles/skeleton.css');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
