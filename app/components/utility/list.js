var React = require('react');
var Store = require('../../store.js');
var UtilityListItem = require('../../components/utility/list-item');

const DATASET = 'utilities';

var UtilityList = React.createClass({
  getInitialState: function() {
    return {
      utilities: []
    };
  },

  componentDidMount: function() {
    this.store = new Store(DATASET);
    this.load();
  },

  load: function() {
    this.store.list({order: 'name'})
      .then(res => {
        this.setState({utilities: res.data});
      });
  },

  render: function() {
    var uList = this.state.utilities.map((utility, i) =>
      <UtilityListItem key={i} id={utility.id} name={utility.name}/>
    );
    return (
      <div>{uList}</div>
    )
  }
});

module.exports = UtilityList;
