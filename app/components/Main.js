var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = require('../components/header');
var UtilityList = require('../components/utility-list');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header header='Blathy'/>
        <UtilityList/>
        <Link to={`/utilities/new`}>+</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
