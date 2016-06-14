var React = require('react');
var Store = require('../../store.js');
var Victory = require('victory');
var VictoryChart = Victory.VictoryChart;
var VictoryLine = Victory.VictoryLine;
var VictoryScatter = Victory.VictoryScatter;
var ReadingList = require('./list.js');
var ReadingForm = require('./form.js');

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
    this.store.list({filters: {utilityId: this.props.params.id}, order: 'readAt'})
      .then(res => {
        this.setState({readings: res.data});
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
