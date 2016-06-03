var React = require('react');

var Header = React.createClass({
  propTypes: {
    header: React.PropTypes.string
  },

  render: function(props) {
    return (
      <h1>{this.props.header}</h1>
    )
  }
});

module.exports = Header;
