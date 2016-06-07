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
        this.setState({readings: res.data});
      });
  },

  render: function() {
    return (
      <div>
        <h1>Utility: {this.props.params.id}</h1>
        <ReadingList readings={this.state.readings}/>
        <ReadingForm/>
      </div>
    )
  }
});

module.exports = ReadingNew;
