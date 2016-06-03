var React = require('react');

var Utility = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Utility: {this.props.params.id}</h1>
      </div>
    )
  }
});


module.exports = Utility;
