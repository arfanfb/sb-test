import React, { useEffect } from 'react';
import {
  useParams,
  Link
} from 'react-router-dom';
import { initialState, propTypes } from './reducer';
import { ArrowLeft, Logo } from '../../icons';
import CardMovies from '../../components/elements/CardMovies';
import Typography from '../../components/elements/Typography';
import styles from './Movie.module.scss';

const Movie = (props) => {
  const { actions, loading, movie } = props;
  let { id } = useParams();

  useEffect(() => {
    return () => {
      actions.reset();
    };
  },[]);

  useEffect(() => {
    actions.getMovie(id, 'full');
  }, [id]);

  const renderCover = () => {
    return (
      <div className={styles.list}>
        {
          (loading && !movie.Title) ? (<CardMovies info={false} loading player={1} />)
            : (<CardMovies image={movie.Poster} info={false} />)
        }
      </div>
    );
  };

  return (
    <div className={[styles.movie].join(' ')}>
      <div className={styles.card}>
        <div className={styles.navigator} style={{ display: 'flex' }}>
          <Logo className={styles.logo} height={100} width={170} />
          <Link to="/"><Typography variant="body"><ArrowLeft /> Back to search</Typography></Link>
        </div>
        <section className={styles.head}>
          {renderCover()}
          <div style={{ marginLeft: '20px' }}>
            <Typography variant="headline-1">{movie.Title ? movie.Title : 'Title'}</Typography>
            <Typography variant="body">{movie.Plot ? movie.Plot : ''}</Typography>
            <Typography variant="headline-4">Director: {movie.Director ? movie.Director : '-'}</Typography>
            <Typography variant="headline-4">Writers: {movie.Writer ? movie.Writer : '-'}</Typography>
            <Typography variant="headline-4">Actors: {movie.Actors ? movie.Actors : '-'}</Typography>
          </div>
        </section>
        <section className={styles.body}>
          <div>
            <Typography variant="body">Country: {movie.Country ? movie.Country : '-'}</Typography>
            <Typography variant="body">Genre: {movie.Genre ? movie.Genre : '-'}</Typography>
            <Typography variant="body">Language: {movie.Language ? movie.Language : '-'}</Typography>
            <Typography variant="body">Year: {movie.Year ? movie.Year : '-'}</Typography>
            <Typography variant="body">Released: {movie.Released ? movie.Released : '-'}</Typography>
            <Typography variant="body">DVD: {movie.DVD ? movie.DVD : '-'}</Typography>
            <Typography variant="body">Production: {movie.Production ? movie.Production : '-'}</Typography>
            <Typography variant="body">Runtime: {movie.Runtime ? movie.Runtime : '-'}</Typography>
            <Typography variant="body">Website: {movie.Website ? movie.Website : '-'}</Typography>
          </div>
          <div>
            <Typography variant="body">Awards: {movie.Awards ? movie.Awards : '-'}</Typography>
            <Typography variant="body">BoxOffice: {movie.BoxOffice ? movie.BoxOffice : '-'}</Typography>
            <Typography variant="body">Ratings:</Typography>
            {
              movie.Ratings ? movie.Ratings.map((item, index) => (
                <Typography key={index} variant="caption">{item.Source + ':' + item.Value}</Typography>
              )) : ''
            }
            <Typography variant="caption">Rated: {movie.Rated ? movie.Rated : '-'}</Typography>
            <Typography variant="caption">imdbRating: {movie.imdbRating ? movie.imdbRating : '-'}</Typography>
            <Typography variant="caption">imdbVotes: {movie.imdbVotes ? movie.imdbVotes : '-'}</Typography>
          </div>
        </section>
      </div>
    </div>
  );
};

Movie.defaultProps = {
  ...initialState,
};

Movie.propTypes = {
  ...propTypes
};

export default Movie;
