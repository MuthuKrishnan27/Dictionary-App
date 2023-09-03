// historyReducer.js

import { ADD_TO_HISTORY } from '../actions/historyActions';

const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      // Check if the word is already in the history
      if (state.some((item) => item === action.payload)) {
        return state;
      }
      // Add the word to the history
      return [...state, action.payload];

    default:
      return state;
  }
};

export default historyReducer;
