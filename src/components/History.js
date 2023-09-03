// src/components/History.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function History() {
  const history = useSelector((state) => state.history);

  return (
    <div className="history">
      <h1>Search History</h1>
      <ul>
        {history.map((searchTerm, index) => (
          <li key={index}>
            <Link to={`/word/${searchTerm}`}>{searchTerm}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
