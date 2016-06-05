import React, {Component, PropTypes} from 'react';

export default class Stream extends Component {
  // add stream to current state
  addStream(text) {
    this.props.onAddClick(text);
  }

  render() {
    return (
      <div className="stream">
        <button className="addbutton" onClick = { ()=>this.addStream(this.props.streamname) }>+</button>
        <div className="streamstatus">
        <p>{this.props.streamstatus.substring(0, 30) + '...'}</p>
        <p>User: <a href={'www.twitch.tv/' + this.props.streamname}>{this.props.streamname}</a></p>
        <p>{this.props.viewer} Viewers</p>
        </div>
      </div>
    );
  }

}

Stream.propTypes = {
  streamname: PropTypes.string.isRequired,
  viewer: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired,
  streamstatus: PropTypes.string.isRequired
};
