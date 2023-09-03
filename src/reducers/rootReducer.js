// src/reducers/rootReducer.js

import { combineReducers } from 'redux';
import historyReducer from './historyReducer';
import wordReducer from './wordReducer';

const rootReducer = combineReducers({
  history: historyReducer,
  word: wordReducer,
  // Other reducers...
});

export default rootReducer;
