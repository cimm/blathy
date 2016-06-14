var React = require('react');
var Store = require('../../store.js');
var Victory = require('victory');
var VictoryChart = Victory.VictoryChart;
var VictoryLine = Victory.VictoryLine;
var VictoryScatter = Victory.VictoryScatter;
var Header = require('../header.js');
var ReadingList = require('./list.js');
var ReadingForm = require('./form.js');

var ReadingNew = React.createClass({
  getInitialState: function() {
    return {
      readings: []
    };
  },

  componentDidMount: function() {
    this.loadUtility();
    this.loadReadings();
  },

  loadUtility: function() {
    new Store('utilities').get(this.props.params.id)
      .then(res => {
        this.setState({utility: res.data});
      });
  },

  loadReadings: function() {
    new Store('readings').list({filters: {utilityId: this.props.params.id}, order: 'readAt'})
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
      <div className='container'>
        <Header header={this.state.utility == undefined ? null : this.state.utility.name}/>
        <ReadingForm utilityId={this.props.params.id} />
        {chart}
        <ReadingList readings={this.state.readings}/>
      </div>
    )
  }
});

module.exports = ReadingNew;
