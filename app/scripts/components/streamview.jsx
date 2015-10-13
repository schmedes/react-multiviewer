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
       <button onClick={()=> this.deleteFrame(this.props.streamindex)}>
       <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
           <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
       </svg>
       </button>
       <button onClick={()=> this.openChat(this.props.streamname)}>
       <svg fill="#FFFFFF" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
           <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
       </svg>
       </button>
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
