import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ index, maxIndex }) => {
  return (
    <div>
      <p className={styles.counter}>
        {index + 1}/{maxIndex}
      </p>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
};

export default Counter;
