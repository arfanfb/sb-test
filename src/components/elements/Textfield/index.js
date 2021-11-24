import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Textfield.module.scss';

export default function Textfield(props) {
  const input = useRef();
  const [showSuggestion, setShowSuggestion] = useState(false);
  const { autocomplete, 'class-name': classNameProps, onChange, width } = props;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }

    setShowSuggestion(true);
  };

  const handleClickSuggestion = (item) => {
    if (item && onChange) {
      onChange({
        target: {
          value: item
        }
      });
    }

    input.current.value = item;
    setShowSuggestion(false);
  };

  const suggestion = autocomplete.filter(item => item
    .includes(input.current ? input.current.value : '')).map((item, index) => (
    <label key={index} onClick={handleClickSuggestion.bind(null, item)}>{item}</label>
  ));

  return (
    <div className={styles['textfield-wrapper']}>
      <input className={[classNameProps, styles.textfield].join(' ')} ref={input}
        placeholder="Placeholder..." width={width} // eslint-disable-line  react/jsx-sort-props
        {...props} onChange={handleChange} />
      { (suggestion.length > 0 && showSuggestion) && (<span>
        {suggestion}
      </span >) }
    </div>
  );
}

Textfield.defaultProps = {
  'class-name': undefined,
  autocomplete: [],
  onChange: undefined,
  width: '200',
};
Textfield.propTypes = {
  autocomplete: PropTypes.array,
  'class-name': PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onChange: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
};

