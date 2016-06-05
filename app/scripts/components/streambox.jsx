import React, { Component, PropTypes } from 'react';
import StreamView from './streamview';
import fixWidth from '../flexboxIframeHack';

export default class StreamBox extends Component {

  constructor(props) {
    super(props);
    // Keyboard shortcuts for fullscreen mode
    // only allow one at a time
    document.addEventListener('keydown', (evt) => {
      const full = document.querySelector('.fullscreen');
      switch (evt.keyCode) {
      case 49:
        if (full) return;
        document.querySelector('.streamcontainer:nth-child(1)').classList.toggle('fullscreen');
        break;
      case 50:
        if (full) return;
        document.querySelector('.streamcontainer:nth-child(2)').classList.toggle('fullscreen');
        break;
      case 51:
        if (full) return;
        document.querySelector('.streamcontainer:nth-child(3)').classList.toggle('fullscreen');
        break;
      case 52:
        if (full) return;
        document.querySelector('.streamcontainer:nth-child(4)').classList.toggle('fullscreen');
        break;
      case 27:
        if (!full) return;
        full.classList.remove('fullscreen');
        break;
      default:
        break;
      }
    });
  }

  componentDidUpdate() {
    const boxes = document.querySelectorAll('.streamcontainer');
    fixWidth(this.props.streamdata, boxes);
  }

  render() {
    return (
        <div className="streambox">
        { this.props.streamdata.map((data, index) =>
           <StreamView streamname = {data} key = {data} streamindex = {index} onDeleteClick = {this.props.onDeleteClick}/>

        )}
      </div>
  );
  }
}

StreamBox.propTypes = {
  streamdata: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};
