// wordActions.js

// import {
//   FETCH_WORD_REQUEST,
//   FETCH_WORD_SUCCESS,
//   FETCH_WORD_FAILURE,
//   FETCH_SYNONYMS_SUCCESS,
//   FETCH_SYNONYMS_FAILURE,
//   FETCH_ANTONYMS_SUCCESS,
//   FETCH_ANTONYMS_FAILURE,
// } from './types';

// Import the API functions
import { fetchWordDetails as apiFetchWordDetails, fetchSynonyms, fetchAntonyms } from '../api/api';

// Action Creators
export const fetchWordRequest = () => ({
  type: FETCH_WORD_REQUEST,
});

export const fetchWordSuccess = (wordDetails) => ({
  type: FETCH_WORD_SUCCESS,
  payload: wordDetails,
});

export const fetchWordFailure = (error) => ({
  type: FETCH_WORD_FAILURE,
  payload: error,
});

export const fetchSynonymsSuccess = (synonyms) => ({
  type: FETCH_SYNONYMS_SUCCESS,
  payload: synonyms,
});

export const fetchSynonymsFailure = (error) => ({
  type: FETCH_SYNONYMS_FAILURE,
  payload: error,
});

export const fetchAntonymsSuccess = (antonyms) => ({
  type: FETCH_ANTONYMS_SUCCESS,
  payload: antonyms,
});

export const fetchAntonymsFailure = (error) => ({
  type: FETCH_ANTONYMS_FAILURE,
  payload: error,
});

// Thunk action to fetch word details
export const fetchWordDetails = (word) => async (dispatch) => {
  dispatch(fetchWordRequest());

  try {
    const wordDetails = await apiFetchWordDetails(word);
    dispatch(fetchWordSuccess(wordDetails));
  } catch (error) {
    dispatch(fetchWordFailure(error));
  }
};

// Thunk action to fetch synonyms for a word
export const fetchSynonymsForWord = (word) => async (dispatch) => {
  try {
    const synonyms = await fetchSynonyms(word);
    dispatch(fetchSynonymsSuccess(synonyms));
  } catch (error) {
    dispatch(fetchSynonymsFailure(error));
  }
};

// Thunk action to fetch antonyms for a word
export const fetchAntonymsForWord = (word) => async (dispatch) => {
  try {
    const antonyms = await fetchAntonyms(word);
    dispatch(fetchAntonymsSuccess(antonyms));
  } catch (error) {
    dispatch(fetchAntonymsFailure(error));
  }
};


export const FETCH_WORD_REQUEST = 'FETCH_WORD_REQUEST';
export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS';
export const FETCH_WORD_FAILURE = 'FETCH_WORD_FAILURE';
export const FETCH_SYNONYMS_SUCCESS = 'FETCH_SYNONYMS_SUCCESS';
export const FETCH_SYNONYMS_FAILURE = 'FETCH_SYNONYMS_FAILURE';
export const FETCH_ANTONYMS_SUCCESS = 'FETCH_ANTONYMS_SUCCESS';
export const FETCH_ANTONYMS_FAILURE = 'FETCH_ANTONYMS_FAILURE';