// historyActions.js

// Action Types
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

// Action Creators
export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});

// Thunk action to add a word to the history
export const addWordToHistory = (word) => (dispatch) => {
  // You can perform any additional logic here, e.g., checking for duplicates
  dispatch(addToHistory(word));
};
