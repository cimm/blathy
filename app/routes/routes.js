var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/main');
var Utility = require('../components/utility');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}/>
    <Route path='/utilities/:id' component={Utility}/>
  </Router>
);

module.exports = routes;
