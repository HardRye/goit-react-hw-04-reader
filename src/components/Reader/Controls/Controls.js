import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ index, maxIndex, handleNext, handlePrev }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        className={index === 0 ? styles.buttonDisabled : styles.button}
        onClick={handlePrev}
      >
        Назад
      </button>
      <button
        type="button"
        className={
          index === maxIndex - 1 ? styles.buttonDisabled : styles.button
        }
        onClick={handleNext}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
};

export default Controls;
