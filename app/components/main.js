var React = require('react');
var Home = require('../components/home');
require('../styles/normalize.css');
require('../styles/skeleton.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <h1>Blathy</h1>
        {this.props.children || <Home/>}
      </div>
    )
  }
});

module.exports = Main;
