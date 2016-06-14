var React = require('react');
var Store = require('../../store.js');

const DATASET = 'utilities';

var UtilityNew = React.createClass({
  getInitialState: function() {
    return {
      currentUtility: {}
    };
  },

  handleName: function(e) {
    var currentUtility = this.state.currentUtility;
    currentUtility['name'] = e.target.value;
    this.setState({currentUtility: currentUtility});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    new Store(DATASET).create(this.state.currentUtility);
    this.setState({currentUtility: {}});
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type='text' onChange={this.handleName} required/>
        </div>
        <button onClick={this.handleSubmit} type='submit'>Save</button>
      </form>
    )
  }
});

module.exports = UtilityNew;
