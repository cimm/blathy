var React = require('react');

var ReadingList = React.createClass({
  propTypes: {
    readings: React.PropTypes.array
  },

  render: function() {
    var readings = this.props.readings.map((reading, i) =>
      <tr key={i}>
        <td>{reading.readAt.toLocaleDateString()}</td>
        <td>{reading.volume}</td>
      </tr>
    );
    return (
      <table className='u-full-width'>
        <tbody>
          {readings}
        </tbody>
      </table>
    )
  }
});

module.exports = ReadingList;
