// Action types
export const ADD_STREAM = 'ADD_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';
// Action Creators
export function addStream(data) {
  return {type: ADD_STREAM, data };
}

export function deleteStream(index) {
  return {type: DELETE_STREAM, index};
}
