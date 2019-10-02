import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, maxCurrentPage }) => (
  <div>
    <p className={styles.counter}>
      {currentPage + 1}/{maxCurrentPage}
    </p>
  </div>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxCurrentPage: PropTypes.number.isRequired,
};

export default Counter;
