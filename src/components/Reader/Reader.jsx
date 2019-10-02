import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  state = {
    currentPage: 0,
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

  handleControlButton = ({ target: { name } }) => {
    this.setState(prevState => ({
      currentPage:
        name === 'next' ? prevState.currentPage + 1 : prevState.currentPage - 1,
    }));
  };

  render() {
    const { currentPage } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Publication item={items[currentPage]} />
        <Counter currentPage={currentPage} maxCurrentPage={items.length} />
        <Controls
          currentPage={currentPage}
          maxCurrentPage={items.length}
          handleControlButton={this.handleControlButton}
        />
      </div>
    );
  }
}
