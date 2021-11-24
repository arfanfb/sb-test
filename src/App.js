import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import pages from './pages';
import 'typeface-roboto';
import styles from './styles/Global.module.scss';
import './styles/base.scss';

const App = ({ store, history }) => {
  return (
    <>
      <a className={styles.badge} href="https://github.com/arfanfb/sb-test"
        target="_blank">
        Github Repository</a>
      <Provider store={store}>
        <Routes history={history}>
          <Route exact index path="/" element={pages.Home()} />
          <Route exact path="/movie/:id" element={pages.Movie()} />
          <Route exact path="notfound" element={pages.NotFound()} />
          <Route path='*' element={pages.NotFound()} />
        </Routes>
      </Provider>
      <label className={styles.copyright}>
        @Copyright 2021 - <a href="https://github.com/arfanfb"
          target="_blank">arfanfb</a>
      </label>
    </>
  );
};

export default App;
