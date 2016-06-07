var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var UtilityListItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <Link to={`/utilities/${this.props.id}/readings/new`}>{this.props.name}</Link>
      </div>
    )
  }
});

module.exports = UtilityListItem;
