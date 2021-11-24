import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './CardMovies.module.scss';

export default function CardMovies(props) {
  const { enlarge, 'class-name': classNameProps, title,
    info, image, link,
    loading, year } = props;
  const ref = useRef();
  const [large, setLarge] = useState(false);

  useOnClickOutside(ref, () => setLarge(false));

  const getLargeSrc = (image) => {
    return image.split('@._V1_')[0] + '@._V1_SX800.jpg';
  };

  const getTitle = () => {
    if (title) {
      return title;
    }

    return loading ? '' : 'Untitled';
  };

  const handleClick = () => {
    setLarge(!large);
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
    <>
      <div className={[styles.card, styles.movies, classNameProps,
        ((title || loading) && info) && styles.info,
        loading && styles.loading].join(' ')} ref={ref}>
        {image ? (
          <div className={styles.image}>
            <img className={styles.cover} src={image}/>
            { enlarge && (<img className={[styles.thumb, large && styles.large].join(' ')}
              onClick={handleClick} src={getLargeSrc(image)}/>) }
          </div>) : (
          <span className={styles.default} />
        )}
        <Link to={(link) ? `/movie/${link}` : ''}>
          {((title || year || loading) && info) && renderInfo()}
        </Link>
      </div>
    </>
  );
}

CardMovies.defaultProps = {
  'class-name': undefined,
  enlarge: false,
  image: undefined,
  info: true,
  link: undefined,
  loading: false,
  title: null,
  year: null,
};

CardMovies.propTypes = {
  'class-name': PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  enlarge: PropTypes.bool,
  image: PropTypes.string,
  info: PropTypes.bool,
  link: PropTypes.string,
  loading: PropTypes.bool,
  title: PropTypes.string,
  year: PropTypes.string,
};
