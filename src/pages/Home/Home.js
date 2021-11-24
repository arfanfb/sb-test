import React, { useEffect, useState, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import { initialState, propTypes } from './reducer';
import Button from '../../components/elements/Button';
import CardMovies from '../../components/elements/CardMovies';
import Select from '../../components/elements/Select';
import Textfield from '../../components/elements/Textfield';
import Typography from '../../components/elements/Typography';
import { Logo } from '../../icons';
import styles from './Home.module.scss';

const Home = (props) => {
  const { actions, loading, moviesData, moviesMeta } = props;
  const refLoad = useRef();
  const onScreen = useOnScreen(refLoad, '20px');
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [plot, setPlot] = useState('');

  useEffect(() => {
    return () => {
      actions.reset();
    };
  }, []);

  useEffect(() => {
    if (onScreen && !loading && title !== '' && (moviesMeta.page < moviesMeta.totalPage)) {
      actions.getMovies(title, year, plot === 'full' && plot, moviesMeta.page + 1);
    }
  }, [onScreen]);

  const handleSearch = () => {
    if (title !== '' || year !== '') {
      actions.reset();
      actions.getMovies(title, year, plot === 'full' && plot, moviesMeta.page + 1);
    }
  };

  const renderSearch = () => {
    return (
      <>
        <span className={styles.search}>
          <Typography variant="body">Search by:</Typography>
          <Textfield class-name={styles['textfield']} input={{ value: title }}
            onChange={(e) => { setTitle(e.target.value); }}
            placeholder="Movie title" width="300" />
          <Textfield class-name={styles['textfield']} onChange={(e) => { setYear(e.target.value); }}
            placeholder="Movie year" value={year} />
          <Select onChange={(value) => { setPlot(value); }} placeholder="Plot">
            <option value="short">Short</option>
            <option value="full">Full</option>
          </Select>
        </span>
      </>
    );
  };

  const renderList = () => {
    return (
      <div className={styles.list}>
        {
          moviesData.length > 0 && (
            moviesData.map((item, index) => (
              <CardMovies enlarge image={item.Poster}
                key={index} link={item.imdbID}
                title={item.Title} year={item.Year} />
            ))
          )
        }
        {
          (loading) && (
            [0, 1, 2, 3, 4].map((_, index) => (
              <CardMovies joystick key={index}
                keyboard loading player={1} />
            ))
          )
        }
      </div>
    );
  };

  return (
    <div className={[styles.home, moviesData.length > 0 && styles.data].join(' ')}>
      <Logo height={100} width={170} />
      {renderSearch()}
      <div className={styles.buttons}>
        <Button onClick={handleSearch} variant="outline">Search</Button>
      </div>
      {renderList()}
      <div>
        <span ref={refLoad} />
      </div>
    </div>
  );
};

Home.defaultProps = {
  ...initialState,
};

Home.propTypes = {
  ...propTypes
};

export default Home;
