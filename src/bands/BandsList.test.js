import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BandsList from './BandsList';

describe('BandsList', () => {
  const band1 = {
    id: '1',
    name: 'Adele',
    numPlays: 10,
    image: 'www.batata.com',
  };
  const band2 = {
    id: '2',
    name: 'Arcade Fire',
    numPlays: 15,
  };
  it('should send a band\'s attributes to Band component', () => {
    const view = shallow(<BandsList bands={[band1]} />);
    expect(view.find('span[className="band-name"]').text()).to.equal(band1.name.toUpperCase());
  });
  it('should show all band names in its content', () => {
    const view = shallow(<BandsList bands={[band1, band2]} />);
    const actualBandName1 = view.find('div[name="Adele"]').find('span[className="band-name"]').text();
    const actualBandName2 = view.find('div[name="Arcade Fire"]').find('span[className="band-name"]').text();

    expect(actualBandName1).to.contain(band1.name.toUpperCase());
    expect(actualBandName2).to.contain(band2.name.toUpperCase());
  });
  it('should show number of times the band was played', () => {
    const view = shallow(<BandsList bands={[band1]} />);
    const actualBand = view.find('div[name="Adele"]');
    expect(actualBand.find('span[className="band-name"]').text()).to.contain(band1.name.toUpperCase());
    expect(actualBand.find('span[className="band-plays"]').text()).to.contain(band1.numPlays.toLocaleString('pt'));
  });
  it('should show band images', () => {
    const view = shallow(<BandsList bands={[band1]} />);
    const actualBand = view.find('div[name="Adele"]');
    expect(actualBand.find('img').prop('src')).to.equal(band1.image);
  });
});
