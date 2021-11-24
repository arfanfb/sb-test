import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import 'typeface-roboto';
import './styles/Global.module.scss';
import './styles/base.scss';

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <Routes history={history}>
        <Route exact index path="/" element={pages.Home()} />
        <Route exact path="/movie/:id" element={pages.Movie()} />
        <Route exact path="notfound" element={pages.NotFound()} />
        <Route path='*' element={pages.NotFound()} />
      </Routes>
    </Provider>
  );
};

export default App;
