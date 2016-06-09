var React = require('react');
var Store = require('../store.js');
var ReadingList = require('./reading-list.js');
var ReadingForm = require('./reading-form.js');

const DATASET = 'readings';

var ReadingNew = React.createClass({
  getInitialState: function() {
    return {
      readings: []
    };
  },

  componentDidMount: function() {
    this.store = new Store(DATASET);
    this.load();
  },

  load: function() {
    this.store.load()
      .then(res => {
        var utilityReadings = res.data.filter(reading => {
          return reading.utilityId == this.props.params.id;
        });
        this.setState({readings: utilityReadings});
      });
  },

  render: function() {
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <ReadingList readings={this.state.readings}/>
        <ReadingForm utilityId={this.props.params.id} />
      </div>
    )
  }
});

module.exports = ReadingNew;
