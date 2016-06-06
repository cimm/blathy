var React = require('react');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var UtilityListItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <Link to={`/utilities/${this.props.name}`}>{this.props.name}</Link>
      </div>
    )
  }
});

module.exports = UtilityListItem;
