import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ currentPage, maxCurrentPage, handleControlButton }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="prev"
      className={styles.button}
      disabled={currentPage === 0}
      onClick={handleControlButton}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      className={styles.button}
      disabled={currentPage === maxCurrentPage - 1}
      onClick={handleControlButton}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  maxCurrentPage: PropTypes.number.isRequired,
  handleControlButton: PropTypes.func.isRequired,
};

export default Controls;
