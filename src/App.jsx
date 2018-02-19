import React, { Component } from 'react';
import BandsListContainer from './bands/BandsListContainer';
import SortMenu from './sort_menu/SortMenu';

export const POPULARITY = 'POPULARITY';
export const ALPHABETICAL = 'ALPHABETICAL';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: ALPHABETICAL,
    };

    this.setOrderBy = this.setOrderBy.bind(this);
  }

  setOrderBy(value) {
    this.setState({ orderBy: value });
  }


  render() {
    return (
      <div>
        <SortMenu orderBy={this.setOrderBy} />
        <BandsListContainer orderBy={this.state.orderBy} />
      </div>
    );
  }
}

export default App;
