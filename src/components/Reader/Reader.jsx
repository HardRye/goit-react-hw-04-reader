import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import publications from '../../assets/publications.json';
import { getPageFromLocation, isPageEligible } from '../../helpers/helpers';

import styles from './Reader.module.css';

class Reader extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  async componentDidMount() {
    const { history, location } = this.props;
    const queryPage = Number(getPageFromLocation(location));

    if (!isPageEligible(queryPage, publications)) {
      history.push({
        ...location,
        search: 'page=1',
        pathname: '/reader',
      });
    }
  }

  handleControlButton = ({ target: { name } }) => {
    const { history, location } = this.props;
    const searchPage = Number(getPageFromLocation(location));

    history.push({
      ...location,
      search: `page=${name === 'next' ? searchPage + 1 : searchPage - 1}`,
    });
  };

  render() {
    const { location } = this.props;
    const queryPage = Number(getPageFromLocation(location));
    const currentPage = isPageEligible(queryPage, publications)
      ? queryPage - 1
      : 0;

    return (
      <div className={styles.reader}>
        <Controls
          currentPage={currentPage}
          maxPage={publications.length}
          handleControlButton={this.handleControlButton}
        />
        <Counter currentPage={currentPage} maxPage={publications.length} />
        <Publication item={publications[currentPage]} />
      </div>
    );
  }
}

export default Reader;
