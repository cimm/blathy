var React = require('react');
var Store = require('../../store.js');

const DATASET = 'readings';

var ReadingForm = React.createClass({
  propTypes: {
    utilityId: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      currentReading: {
        utilityId: this.props.utilityId
      }
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
        <div className='row'>
          <input className='twelve columns' type='number' onChange={this.handleVolume} required/>
        </div>
        <div className='row'>
          <input className='twelve columns' type='date' onChange={this.handleReadAt} required/>
        </div>
        <div className='row'>
          <input type='submit' value='Submit'/>
        </div>
      </form>
    )
  }
});

module.exports = ReadingForm;
