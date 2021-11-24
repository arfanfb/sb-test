import React from 'react';
import PropTypes from 'prop-types';
import styles from './Typography.module.scss';

export default function Typography(props) {
  const { 'class-name': classNameProps, tag: TagProp, variant, weight } = props;
  const className = [
    styles['typography'],
    styles[`${variant}`],
    styles[`${weight}`],
    classNameProps,
  ].join(' ');

  const preVariant = variant[0];
  const postVariant = variant.split('-')[1];
  const Tag = variant[0] === 'h' ? `${preVariant+postVariant}` : TagProp;
  return (
    ((preVariant === 'b' || preVariant === 'c')&& !TagProp)
      ? <label className={className} {...props} />
      : <Tag className={className} {...props} />
  );
}

Typography.defaultProps = {
  'class-name': undefined,
  tag: 'p',
  variant: 'body-1',
  weight: undefined,
};

Typography.propTypes = {
  'class-name': PropTypes.string,
  tag: PropTypes.string,
  variant: PropTypes.string,
  weight: PropTypes.string,
};
