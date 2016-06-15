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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <input className='twelve columns' type='text' onChange={this.handleName} required/>
          </div>
          <div className='row'>
            <input type='submit' value='Submit'/>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = UtilityNew;
