var React = require('react');
var Header = require('../components/header');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header header='Blathy'/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
