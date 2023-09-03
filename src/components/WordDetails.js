// src/components/WordDetails.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordDetails } from '../actions/wordActions';

function WordDetails() {
  const { word } = useParams();
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.word);

  useEffect(() => {
    // Fetch word details based on the "word" parameter
    dispatch(fetchWordDetails(word));
  }, [dispatch, word]);

  return (
    <div className="word-page">
    <div className="word-details">
      {data ? (
        <div>
          <h2>{data[0].word}</h2>
          <div>
            {data[0].phonetics.map((phonetic, index) => (
              <div key={index}>
                <p>{phonetic.text}</p>
                {phonetic.audio && (
                  <audio key={phonetic.audio} controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            ))}
          </div>
          <div>
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <h3>Part of Speech: {meaning.partOfSpeech}</h3>
                <ul>
                  {meaning.definitions.map((definition, subIndex) => (
                    <li key={subIndex}>{definition.definition}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
}

export default WordDetails;
