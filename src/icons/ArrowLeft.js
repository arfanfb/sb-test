import React from "react";
import PropTypes from "prop-types";

export default function ArrowLeft(props) {
  const { className: classNameProps, fill, height, onClick, width } = props;
  return (
    <svg
      className={classNameProps} height={height} onClick={onClick}
      viewBox={`0 0 ${height} ${width}`} xmlns="http://www.w3.org/2000/svg" width={width}
    >
      <path clipRule="evenodd" 
        d={`M12.6666 7.33344H4.75663L7.17863 4.42677C7.41463 4.1441 7.37596 3.72344 7.09329 3.4881C6.80996
          3.2521 6.38996 3.29077 6.15463 3.57344L2.82129 7.57344C2.79529 7.60477 2.78196 7.64144 2.76263
          7.6761C2.74663 7.7041 2.72729 7.7281 2.71529 7.75877C2.68529 7.83544 2.66729 7.9161 2.66729
          7.99744C2.66729 7.9981 2.66663 7.99944 2.66663 8.0001C2.66663 8.00077 2.66729 8.0021 2.66729
          8.00277C2.66729 8.0841 2.68529 8.16477 2.71529 8.24144C2.72729 8.2721 2.74663 8.2961 2.76263
          8.3241C2.78196 8.35877 2.79529 8.39544 2.82129 8.42677L6.15463 12.4268C6.28663 12.5848 6.47596
          12.6668 6.66663 12.6668C6.81729 12.6668 6.96863 12.6161 7.09329 12.5121C7.37596 12.2768 7.41463
          11.8561 7.17863 11.5734L4.75663 8.66677H12.6666C13.0346 8.66677 13.3333 8.3681 13.3333
          8.0001C13.3333 7.6321 13.0346 7.33344 12.6666 7.33344Z`} fill={fill}/>
    </svg>
  );
}

ArrowLeft.defaultProps = {
  fill: '#FFFFFF',
  height: '16',
  onClick: () => {},
  width: '16'
};
ArrowLeft.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string
};

