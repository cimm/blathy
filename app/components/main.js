var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = require('../components/header');
var UtilityList = require('../components/utility/list');
require('../styles/normalize.css');
require('../styles/skeleton.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <Header header='Blathy'/>
        <UtilityList/>
        <Link className='button u-pull-right' to={`/utilities/new`}>+</Link>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
