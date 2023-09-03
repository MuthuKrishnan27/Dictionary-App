// WordSearch.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchWordDetails,
  fetchSynonymsForWord,
  fetchAntonymsForWord,
} from '../actions/wordActions';

function WordSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    // Dispatch actions to fetch word details, synonyms, and antonyms
    dispatch(fetchWordDetails(searchTerm));
    dispatch(fetchSynonymsForWord(searchTerm));
    dispatch(fetchAntonymsForWord(searchTerm));
  };

  return (
    <div className="word-search">
      <h2>Search for Word</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default WordSearch;
