import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import History from '../components/History';
import WordDetails from '../components/WordDetails';
import NavBar from '../components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}>
            <Route path="" element={<Home />} />
            <Route path="history" element={<History/>} />
            <Route path="word/:word" element={<WordDetails/>} />
        </Route>
      </Routes>
     </Router>
  );
}

export default App;
