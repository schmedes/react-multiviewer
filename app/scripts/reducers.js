import {ADD_STREAM, DELETE_STREAM} from './actions';


function StreamViewer(state = {streamdata: [] }, action) {
  switch (action.type) {
  case ADD_STREAM:
    return {
      streamdata: [...state.streamdata, action.data]
    };
  case DELETE_STREAM:
    return {
      streamdata: [...state.streamdata.slice(0, action.index), ...state.streamdata.slice(action.index + 1)]
    };
  default:
    return state;
  }
}


export default StreamViewer;
