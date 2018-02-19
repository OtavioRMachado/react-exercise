import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SortMenu from './SortMenu';

describe('BandsList', () => {
  it('Should not show options on startup', () => {
    const view = shallow(<SortMenu orderBy={() => {}} />);
    expect(view.find('span')).to.have.length(0);
  });
  it('Should show options when showOptions is true', () => {
    const view = shallow(<SortMenu showOptions orderBy={() => {}} />);
    expect(view.find('span')).to.have.length(2);
  });
  it('clicking on Image should toggle showOptions', () => {
    const view = shallow(<SortMenu orderBy={() => {}} />);
    view.find('img').simulate('click');
    expect(view.state().showOptions).to.equal(true);
  });
  it('clicking on span should toggle showOptions and execute orderByPopularity', () => {
    const myObj = { clicks: 0 };
    const mySpy = object => () => { object.clicks += 1; }; // eslint-disable-line no-param-reassign
    const view = shallow(<SortMenu showOptions orderBy={mySpy(myObj)} />);
    view.find('span[name="popularity"]').simulate('click');
    expect(myObj.clicks).to.equal(1);
    expect(view.state().showOptions).to.equal(false);
    view.find('img').simulate('click');
    expect(view.state().showOptions).to.equal(true);
    view.find('span[name="alphabetical"]').simulate('click');
    expect(myObj.clicks).to.equal(2);
    expect(view.state().showOptions).to.equal(false);
  });
});
