import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../Typography';
import styles from './Button.module.scss';

export default function Button(props) {
  const { children, 'class-name': className, disabled, height,
    icon, onClick, to, type, variant, width } = props;
  const customClass = [styles['button'], styles[variant], className].filter(Boolean).join(' ');
  const content = typeof children === object ? <Typography>{children}</Typography> : children;

  return (to ?
    (<Link className={customClass} disabled={disabled} href={to} style={{ width: width }}>
      <a><span>{icon} {content}</span></a></Link>) :
    (<button className={customClass} disabled={disabled}
      onClick={onClick} style={{ height: height, width: width }} type={type}>
      {icon} {content}</button>)
  );
}

Button.defaultProps = {
  'class-name': '',
  children: null,
  disabled: false,
  height: 48,
  icon: null,
  onClick: null,
  to: undefined,
  type: 'button',
  variant: 'primary',
  width: 182,
};

Button.propTypes = {
  children: PropTypes.node,
  'class-name': PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
