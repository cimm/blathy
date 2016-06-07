var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Main = require('../components/main');
var ReadingNew = require('../components/reading-new');
var UtilityNew = require('../components/utility-new');

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}/>
    <Route path='/utilities/new' component={UtilityNew}/>
    <Route path='/utilities/:id/readings/new' component={ReadingNew}/>
  </Router>
);

module.exports = routes;
