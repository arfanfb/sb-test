import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textfield.module.scss';

export default function Textfield(props) {
  const { 'class-name': classNameProps, width } = props;

  return (
    <input className={[classNameProps, styles.textfield].join(' ')} placeholder="Placeholder..." width={width}
      {...props} />
  );
}

Textfield.defaultProps = {
  'class-name': undefined,
  width: '200',
};
Textfield.propTypes = {
  'class-name': PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
};

