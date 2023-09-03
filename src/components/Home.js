import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordDetails } from '../actions/wordActions';
import { addToHistory } from '../actions/historyActions';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.word);

  // Maintain a reference to the currently playing audio element
  const audioRef = useRef(null);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      return;
    }

    // Check if there's a currently playing audio and pause it
    if (audioRef.current) {
      audioRef.current.pause();
    }

    dispatch(fetchWordDetails(searchTerm));
    dispatch(addToHistory(searchTerm));
  };

  useEffect(() => {
    if (data) {
      console.log('Word Details:', data);
    } else if (error) {
      console.error('Error fetching word details:', error);
    }
  }, [data, error]);

  return (
    <div className="home">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {data && (
        <div className="search-results">
          <h2>{data[0].word}</h2>
          <div className="phonetics">
            {data[0].phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>{phonetic.text}</p>
                {phonetic.audio && (
                  <audio
                    key={phonetic.audio} // Use a unique key for each audio element
                    ref={audioRef} // Set the ref to the audio element
                    controls
                  >
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
          <div className="meanings">
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <h3>{meaning.partOfSpeech}</h3>
                <ul>
                  {meaning.definitions.map((definition, subIndex) => (
                    <li key={subIndex}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default Home;
