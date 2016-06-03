import React, { Component, PropTypes } from 'react';

export default class StreamView extends Component {
  // Delete an item from store
  deleteFrame(index) {
    const stateArray = location.hash.split('/');
    let hash = '#';
    for (let it = 1; it <= stateArray.length - 1; it++) {
      if (stateArray[it] !== this.props.streamname) {
        hash += '/' + stateArray[it];
      }
    }
    window.location.hash = hash;
    this.props.onDeleteClick(index);
  }
  // Open Twitch-Chat in additional window
  openChat(text) {
    window.open('http://www.twitch.tv/' + text + '/chat?popout=', '', 'height=500,width=300');
  }
  // Fill viewport with 1 stream
  toggleFullScreen(text) {
    document.querySelector('.' + text).classList.toggle('fullscreen');
  }

 render() {
   return (
       <div className={this.props.streamname + ' streamcontainer'}>
       <div className="buttoncontainer">
       <button onClick={()=> this.deleteFrame(this.props.streamindex)}>Remove</button>
       <button onClick={()=> this.openChat(this.props.streamname)}>Chat</button>
       <button onClick={()=> this.toggleFullScreen(this.props.streamname)}>Fill</button>
       </div>
       <div className= "streamview">
       <object type="application/x-shockwave-flash" data="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" bgcolor="#000000">
       <param name="allowFullScreen" value="true" />
       <param name="allowScriptAccess" value="always" />
       <param name="allowNetworking" value="all" />
       <param name="movie" value="//www-cdn.jtvnw.net/swflibs/TwitchPlayer.swf" />
       <param name="flashvars" value={'channel=' + this.props.streamname + '&auto_play=true&start_volume=25'} />
       </object>
       </div></div>
     );
 }
}

StreamView.propTypes = {
  streamname: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  streamindex: PropTypes.number.isRequired
};
