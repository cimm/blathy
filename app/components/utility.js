var React = require('react');
var Store = require('../store.js')

const DATASET = 'readings';

var Utility = React.createClass({
  getInitialState: function() {
    return {
      readings: [],
      currentReading: {}
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
    var readings = this.state.readings;
    readings.push(this.state.currentReading);
    this.store.create(this.state.currentReading);
    this.setState({currentReading: {}});
    this.load();
  },

  render: function() {
    var readings = this.state.readings.map((reading, i) =>
      <tr key={i}>
        <td>{reading.readAt.toString()} - {reading.volume}</td>
      </tr>
    );
    return (
      <div>
        <h1>Utility: {this.props.params.id}</h1>
        <div>
          <table>
            <tbody>
              {readings}
            </tbody>
          </table>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type='number' onChange={this.handleVolume}/>
          </div>
          <div>
            <input type='date' onChange={this.handleReadAt}/>
          </div>
        </form>
        <button onClick={this.handleSubmit} type='submit'>Save</button>
      </div>
    )
  }
});

module.exports = Utility;
