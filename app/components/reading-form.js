var React = require('react');
var Store = require('../store.js');

const DATASET = 'readings';

var ReadingForm = React.createClass({
  getInitialState: function() {
    return {
      currentReading: {}
    };
  },

  componentDidMount: function() {
    this.store = new Store(DATASET);
  },

  handleVolume: function(e) {
    var currentReading = this.state.currentReading;
    currentReading['volume'] = parseInt(e.target.value);
    this.setState({currentReading: currentReading});
  },

  handleReadAt: function(e) {
    var currentReading = this.state.currentReading;
    currentReading['readAt'] = new Date(e.target.value);
    this.setState({currentReading: currentReading});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.store.create(this.state.currentReading);
    this.setState({currentReading: {}});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type='number' onChange={this.handleVolume} required/>
        </div>
        <div>
          <input type='date' onChange={this.handleReadAt} required/>
        </div>
        <button onClick={this.handleSubmit} type='submit'>Save</button>
      </form>
    )
  }
});

module.exports = ReadingForm;
