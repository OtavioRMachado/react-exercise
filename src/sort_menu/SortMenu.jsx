import React, { Component } from 'react';
import PropTypes from 'prop-types';
import buttonImage from '../images/button.png';
import { POPULARITY, ALPHABETICAL } from '../App';

class SortMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOptions: props.showOptions,
    };

    this.toggleOptions = this.toggleOptions.bind(this);
    this.orderByPopularity = this.orderByPopularity.bind(this);
    this.orderAlphabetical = this.orderAlphabetical.bind(this);
  }

  toggleOptions() {
    this.setState({ showOptions: !this.state.showOptions });
  }

  orderByPopularity() {
    this.props.orderBy(POPULARITY);
    this.toggleOptions();
  }

  orderAlphabetical() {
    this.props.orderBy(ALPHABETICAL);
    this.toggleOptions();
  }

  render() {
    return (
      <div className="order-bands">
        <img className="button-image" alt="order" src={buttonImage} onClick={this.toggleOptions} />
        {
          this.state.showOptions &&
          <div className="order-options">
            <span name="alphabetical" onClick={this.orderAlphabetical}>ORDEM ALFABÉTICA</span>
            <span name="popularity" onClick={this.orderByPopularity}>POPULARIDADE</span>
          </div>
      }
      </div>
    );
  }
}

SortMenu.propTypes = {
  showOptions: PropTypes.bool,
  orderBy: PropTypes.func.isRequired,
};

SortMenu.defaultProps = {
  showOptions: false,
};

export default SortMenu;
