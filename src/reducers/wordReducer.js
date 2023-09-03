// wordReducer.js

import {
    FETCH_WORD_REQUEST,
    FETCH_WORD_SUCCESS,
    FETCH_WORD_FAILURE,
    FETCH_SYNONYMS_SUCCESS,  // Add this line
    FETCH_SYNONYMS_FAILURE,  // Add this line
    FETCH_ANTONYMS_SUCCESS,  // Add this line
    FETCH_ANTONYMS_FAILURE,  // Add this line
    // Import other action types if needed
  } from '../actions/wordActions';
  
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const wordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WORD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case FETCH_WORD_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
  
      case FETCH_WORD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default wordReducer;
  