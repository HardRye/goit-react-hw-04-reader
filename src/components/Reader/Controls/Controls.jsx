import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ index, maxIndex, handleButton }) => {
  return (
    <section className={styles.controls}>
      <button
        type="button"
        name="prev"
        className={index === 0 ? styles.buttonDisabled : styles.button}
        onClick={handleButton}
      >
        Назад
      </button>
      <button
        type="button"
        name="next"
        className={
          index === maxIndex - 1 ? styles.buttonDisabled : styles.button
        }
        onClick={handleButton}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
  handleButton: PropTypes.func.isRequired,
};

export default Controls;
