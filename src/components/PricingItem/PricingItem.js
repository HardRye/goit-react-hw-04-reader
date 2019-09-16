import React from 'react';
import PropTypes from 'prop-types';

import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  let labelType;
  let buttonType;
  switch (label) {
    case 'Bronze':
      labelType = styles.labelBronze;
      buttonType = styles.buttonBronze;
      break;
    case 'Silver':
      labelType = styles.labelSilver;
      buttonType = styles.buttonSilver;
      break;
    case 'Gold':
      labelType = styles.labelGold;
      buttonType = styles.buttonGold;
      break;
    default:
      labelType = styles.label;
      buttonType = styles.button;
  }

  return (
    <li className={styles.pricingItem}>
      <i
        className={styles.icon}
        style={{ backgroundImage: `url( ${icon} )` }}
      />
      <h2 className={labelType}>{label}</h2>
      <p className={styles.capacity}>{capacity} storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button type="button" className={buttonType}>
        Get Started
      </button>
    </li>
  );
};

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
