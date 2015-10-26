import React, {Component, PropTypes} from 'react';
import Stream from './stream';
import jsonp from 'jsonp';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {streamlist: []};
  }
  // fetch a list of streams from twitch
  fetchStreamList() {
    jsonp('https://api.twitch.tv/kraken/streams?game=' + this.props.gamename, {param: 'callback', timeout: 60000, prefix: 'a_', name: 'foo'}, (err, data)=>{
      if (!err) {
        this.setState({streamlist: data.streams});
      }
    }
  );
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
