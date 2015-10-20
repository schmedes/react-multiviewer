import React, {Component, PropTypes} from 'react';
import Stream from './stream';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {streamlist: []};
  }
  // fetch a list of streams from twitch
  fetchStreamList() {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'https://api.twitch.tv/kraken/streams?game=' + this.props.gamename);
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.send(null);
    xml.onreadystatechange = function onreadystatechange() {
      if (xml.readyState === 4) {
        if (xml.status === 200) {
          this.setState( {streamlist: JSON.parse(xml.response).streams} );
        }
      }
    }.bind(this);
  }
  // clear component state
  clearState(event) {
    event.preventDefault();
    this.setState({streamlist: []});
  }

  render() {
    return (
      <div className="game">
      <div className = {this.props.gamename + ' gameinfo'} onClick = { ()=>this.fetchStreamList() }>
      <p>Game: {this.props.gamename}</p>
      <p>Viewers: {this.props.viewer}</p></div>
      <button className="collapsebutton" onClick={(event)=>this.clearState(event)}>^</button>
      <div>
      {this.state.streamlist.map((data)=>
        <Stream streamname = {data.channel.name} key={data.channel.name} viewer={data.viewers} streamstatus={data.channel.status} onAddClick={this.props.onAddClick}/>
      )}
      </div></div>
    );
  }
}

Game.propTypes = {
  gamename: PropTypes.string.isRequired,
  viewer: PropTypes.number.isRequired,
  onAddClick: PropTypes.func.isRequired
};
