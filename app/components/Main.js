var React = require('react');
var Header = require('../components/header');
var UtilityList = require('../components/utility-list');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Header header='Blathy'/>
        <UtilityList/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
