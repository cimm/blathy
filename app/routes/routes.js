var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var ReadingNew = require('../components/reading/new');
var UtilityNew = require('../components/utility/new');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/utilities/new' component={UtilityNew}/>
      <Route path='/utilities/:id/readings/new' component={ReadingNew}/>
    </Route>
  </Router>
);

module.exports = routes;
