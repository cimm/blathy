var React = require('react');
var Store = require('../store.js');
var Victory = require('victory');
var VictoryChart = Victory.VictoryChart;
var VictoryLine = Victory.VictoryLine;
var VictoryScatter = Victory.VictoryScatter;
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
        utilityReadings.sort((a, b) => a.readAt > b.readAt)
        this.setState({readings: utilityReadings});
      });
  },

  render: function() {
    var lineData = [];
    for (let reading of this.state.readings) {
      lineData.push({x: reading.readAt, y: reading.volume});
    }
    if(lineData.length > 1) {
      var chart = [
        <VictoryChart key='chart' scale={{x: 'time'}}>
          <VictoryLine data={lineData}/>
          <VictoryScatter
            data={lineData}
            style={{
              data: {
                stroke: 'white',
                strokeWidth: 3
              }}
            }
          />
        </VictoryChart>
      ];
    }
    return (
      <div>
        <h1>{this.props.params.id}</h1>
        <ReadingList readings={this.state.readings}/>
        {chart}
        <ReadingForm utilityId={this.props.params.id} />
      </div>
    )
  }
});

module.exports = ReadingNew;
