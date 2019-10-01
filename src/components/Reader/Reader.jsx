import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  state = {
    index: 0,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  handleButton = ({ target }) => {
    const { items } = this.props;
    const { index } = this.state;
    this.setState(prevState => {
      if (target.name === 'next' && index !== items.length - 1) {
        return { index: prevState.index + 1 };
      }
      if (target.name === 'prev' && index !== 0) {
        return { index: prevState.index - 1 };
      }
    });
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />
        <Counter index={index} maxIndex={items.length} />
        <Controls
          index={index}
          maxIndex={items.length}
          handleButton={this.handleButton}
        />
      </div>
    );
  }
}
