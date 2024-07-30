import { INCREMENT, DECREMENT } from './constant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

// Creating the action creator for the decrement action
export function decrementAction() {
  return {
    type: DECREMENT,
  };
}