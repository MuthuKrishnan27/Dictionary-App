import axios from 'axios';

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

// Function to fetch word details
export const fetchWordDetails = async (word) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${word}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch synonyms for a word
export const fetchSynonyms = async (word) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${word}/synonyms`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to fetch antonyms for a word
export const fetchAntonyms = async (word) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${word}/antonyms`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
