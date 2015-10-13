import React, { Component, PropTypes } from 'react';
import StreamView from './streamview';

export default class StreamBox extends Component {

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
