import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './CardMovies.module.scss';

export default function CardMovies(props) {
  const { 'class-name': classNameProps, 'external-url': externalUrl, title, image, link,
    loading, year } = props;
  const [windows, setWindow] = useState(undefined);

  useEffect(() => {
    setWindow(window);
  },[]);

  const getLink = () => {
    return !externalUrl ? windows.location.origin + '/' + link : link;
  };

  const getTitle = () => {
    if (title) {
      return title;
    }

    return loading ? '' : 'Untitled';
  };

  const renderInfo = () => (
    <section>
      <Typography class-name={styles.title} variant="body-2">
        {getTitle()}</Typography>
      <div>
        {(year && !loading) ? (<Typography variant="overline-1">
          {year}
        </Typography>) : (<span className={styles.year} />)}
      </div>
    </section>
  );

  return (
    <a href={(link && windows) ? getLink() : ''}>
      <div className={[styles.card, styles.movies, classNameProps,
        (title || loading) && styles.info,
        loading && styles.loading].join(' ')}>
        {image ? (<img loading="lazy" src={image}/>) : (
          <span className={styles.default} />
        )}
        {(title || year || loading) && renderInfo()}
      </div>
    </a>
  );
}

CardMovies.defaultProps = {
  'class-name': undefined,
  'external-url': false,
  image: undefined,
  link: undefined,
  loading: false,
  title: null,
  year: null,
};

CardMovies.propTypes = {
  'class-name': PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  'external-url': PropTypes.bool,
  image: PropTypes.string,
  link: PropTypes.string,
  loading: PropTypes.bool,
  title: PropTypes.string,
  year: PropTypes.string,
};
