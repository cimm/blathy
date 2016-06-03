var React = require('react');
var UtilityListItem = require('../components/utility-list-item');

var UtilityList = React.createClass({
  render: function() {
    var utilities = ['Water', 'Gas', 'Electricity day', 'Electricity night', 'Solar'];
    var uList = utilities.map(function(name, i) {
      return(<UtilityListItem key={i} name={name}/>);
    });
    return (
      <div>{uList}</div>
    )
  }
});

module.exports = UtilityList;
