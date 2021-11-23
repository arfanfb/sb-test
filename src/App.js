import React from 'react';
import { Routes, Route } from 'react-router-dom';
import pages from './pages';

const App = () => {
  return (
    
    <Routes>
      <Route exact index path="/" element={pages.Home()} />
      <Route exact path="notfound" element={pages.NotFound()} />
      <Route path='*' element={pages.NotFound()} />
    </Routes>
  );
};

export default App;
