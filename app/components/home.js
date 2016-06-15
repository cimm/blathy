var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var UtilityList = require('../components/utility/list');

var Home = React.createClass({
  render: function(props) {
    return (
      <div>
        <UtilityList/>
        <Link className='button u-pull-right' to={`/utilities/new`}>+</Link>
      </div>
    )
  }
});

module.exports = Home;
