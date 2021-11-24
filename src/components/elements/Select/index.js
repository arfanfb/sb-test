import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowUp, Checklist } from '../../../icons';
import Typography from '../Typography';
import styles from './Select.module.scss';

export default function Select(props) {
  const { children, 'class-name': classNameProps, multiple, onChange,
    placeholder, width } = props;
  const [active, setActive] = useState(styles[`in-active`]);
  const [item, setItem] = useState(!multiple ? undefined : []);
  const handleOpen = () => {
    setActive(
      active === styles[`in-active`] ? styles[`active`] : styles[`in-active`]
    );
  };
  useEffect(() => {
    if (item !== undefined && item !== []) {
      onChange(item);
    }
  }, [item]);
  const handleClick = (params) => {
    const { children: itemSelected, disabled, value } = params;

    if (!disabled && !multiple) {
      setItem(value ? value : itemSelected);
      handleOpen();
    }

    if (!disabled && multiple) {
      let newItem = [...item];

      if (!newItem.includes(itemSelected) && !newItem.includes(value)) {
        newItem.push(value ? value : itemSelected);
      } else {
        newItem = newItem.filter(item => value ? item !== value :
          item !== itemSelected);
      }

      setItem(newItem);
      handleOpen();
    }
  };
  const isActive = (option) => {
    const { children, value } = option;

    if (!multiple && children === item) {
      return true;
    } else if (!multiple && value === item && value) {
      return true;
    } else if (multiple && item.includes(children)) {
      return true;
    } else if (multiple && item.includes(value)) {
      return true;
    } else {
      return false;
    }
  };
  const getPlaceholder = () => {
    const value = children.filter(option => option.props.value === item);

    if (!multiple && item && !value) {
      return item;
    } else if (!multiple && item && value) {
      return value[0].props.children;
    } else if ((!multiple && !item) || multiple) {
      return placeholder;
    }
  };
  const renderItem = () => {
    return (
      <div className={styles.options} style={{ width: `${width}px` }}>
        {
          children.map((option, index) => (
            <span className={option.props.disabled && styles.disabled} key={index}
              onClick={handleClick.bind(null, option.props)}>
              {option.props.children}
              {isActive(option.props) && <Checklist />}
            </span>
          ))
        }
      </div>
    );
  };

  return (
    <div className={[styles.select, classNameProps].join(' ')}>
      <button className={active} onClick={handleOpen}>
        <Typography variant="button">
          {getPlaceholder()}
        </Typography>
        <ArrowUp />
      </button>
      {active === styles[`active`] && renderItem()}
    </div>
  );
}

Select.defaultProps = {
  'class-name': undefined,
  children: [],
  multiple: false,
  onChange: () => { },
  placeholder: 'Select',
  width: '200',
};
Select.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  'class-name': PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.string,
};
