import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addStream, deleteStream} from '../actions';
import StreamController from './streamcontroller';
import StreamBox from './streambox';


class App extends Component {
  // Get initialstate from hash
  constructor(props) {
    super(props);
    const initialStateArray = location.hash.split('/');
    for (let it = 1; it <= initialStateArray.length - 1; it++) {
      if (initialStateArray[it] !== '') {
        this.props.dispatch(addStream(initialStateArray[it]));
      }
    }
  }

  render() {
    const { dispatch, streamdata } = this.props;
    const actions = bindActionCreators({ addStream, deleteStream }, dispatch);
    return (
      <div>
      <StreamBox streamdata={ streamdata } onDeleteClick={ (index)=> actions.deleteStream(index) } />
      <StreamController onAddClick={ (text) => actions.addStream(text) } />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    streamdata: state.streamdata
  };
}

App.propTypes = {
  streamdata: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
