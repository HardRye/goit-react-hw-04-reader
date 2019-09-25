import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ item: { title, id, text } }) => {
  return (
    <article className={styles.publication} id={id}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
