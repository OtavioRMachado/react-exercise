import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BandsList from './BandsList';
import { ALPHABETICAL } from '../App';
import Sort from '../sort_helper';


class BandsListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [],
    };

    this.fetchBands = this.fetchBands.bind(this);
    this.fetchBands();
  }

  componentWillReceiveProps(nextProps) {
    const newBands = nextProps.orderBy === ALPHABETICAL ?
      Sort.sortAlphabetical(this.state.bands) :
      Sort.sortPopularity(this.state.bands);
    this.setState({ bands: newBands });
  }

  fetchBands() {
    fetch('https://iws-recruiting-bands.herokuapp.com/api/bands')
      .then((response) => {
        response.json().then((myBands) => {
          this.setState({ bands: myBands });
        });
      });
  }

  render() {
    return (
      <BandsList {...this.state} />
    );
  }
}

BandsListContainer.propTypes = {
  orderBy: PropTypes.string.isRequired,
};

export default BandsListContainer;
