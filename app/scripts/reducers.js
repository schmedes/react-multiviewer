import {ADD_STREAM, DELETE_STREAM} from './actions';


function StreamViewer(state = {streamdata: [] }, action) {
  switch (action.type) {
  case ADD_STREAM:
  // add new stream to state
    let streamInArray = false;
    state.streamdata.forEach((el) => {
      if (el === action.data) streamInArray = true;
    });
    if (streamInArray) {
      return state;
    }
    window.location.hash += '/' + action.data;
    return {
      streamdata: [...state.streamdata, action.data]
    };
  case DELETE_STREAM:
  // return state without deleted stream
    return {
      streamdata: [...state.streamdata.slice(0, action.index), ...state.streamdata.slice(action.index + 1)]
    };
  default:
    return state;
  }
}


export default StreamViewer;
