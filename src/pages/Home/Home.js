import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (onScreen && !loading) {
      actions.getTest(undefined, moviesMeta.page + 1);
    }
  }, [onScreen]);

  useEffect(() => {
    actions.setLoading(true);
    actions.getTest(undefined, moviesMeta.page + 1);
  }, []);

  const renderSearch = () => {
    return (
      <>
        <span className={styles.search}>
          <Typography variant="body">Search by:</Typography>
          <Textfield class-name={styles['textfield']} onChange={() => { }}
            placeholder="Movie title" width="300" />
          <Textfield class-name={styles['textfield']} onChange={() => { }}
            placeholder="Movie year" />
          {/* <ButtonIcon class-name={styles['search-icon']} heightIcon={21}
            icon={Search} onClick={() => { }} widthIcon={21} /> */}
          <Select onChange={() => { }} placeholder="Plot">
            <option value="">Short</option>
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
              <CardMovies image={item.Poster} imdb={item.imdbID} key={index}
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
        <Button variant="outline">Search</Button>
        <Button variant="outline">Reset</Button>
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
