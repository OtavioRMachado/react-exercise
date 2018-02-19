import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import BandsListContainer from './bands/BandsListContainer';

it('renders the list component', () => {
  const view = shallow(<App />);
  expect(view.find(BandsListContainer)).to.have.length(1);
});
