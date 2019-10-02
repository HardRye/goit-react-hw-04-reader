import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, maxPage }) => (
  <div>
    <p className={styles.counter}>
      {currentPage + 1}/{maxPage}
    </p>
  </div>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
};

export default Counter;
