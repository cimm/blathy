var React = require('react');

var Header = React.createClass({
  render: function(props) {
    return (
      <h1>{this.props.header}</h1>
    )
  }
});

module.exports = Header;
