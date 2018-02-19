import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noImage from '../images/no-image.png';

import './BandsList.css';

class BandsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: props.bands,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ bands: nextProps.bands });
  }

  addDefaultSource(ev){
    ev.target.src = noImage;
  }

  render() {
    return (
      <div className="bands-list">
        {
        this.state.bands.map(band =>
          (
            <div key={band.id} name={band.name} className="band">
              <img className="band-image" onError={this.addDefaultSource} alt={band.name} src={band.image} />
              <div className="band-info">
                <span className="band-name">{band.name.toUpperCase()}</span>
                <span className="band-plays">{band.numPlays.toLocaleString('pt')} PLAYS</span>
              </div>
            </div>
          ))
      }
      </div>
    );
  }
}

BandsList.propTypes = {
  bands: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    numPlays: PropTypes.number,
  })).isRequired,
};

export default BandsList;
