import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';
import Services from './components/Services';
import Data from './components/Data';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/services" element={<Services />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
