import { expect } from 'chai';
import Sort from './sort_helper';

describe('sortAlphabetical', () => {
  it('returns nothing if empty array', () => {
    const result = Sort.sortAlphabetical([]);
    expect(result).to.eql([]);
  });
  it('returns objects ordered by name', () => {
    const myObjects = [
      { name: 'b' },
      { name: 'a' },
    ];
    const result = Sort.sortAlphabetical(myObjects);
    expect(result).to.eql([{ name: 'a' }, { name: 'b' }]);
  });
});

describe('sortPopularity', () => {
  it('returns nothing if empty array', () => {
    const result = Sort.sortPopularity([]);
    expect(result).to.eql([]);
  });
  it('returns objects descending ordered by numPlays', () => {
    const myObjects = [
      { numPlays: 1 },
      { numPlays: 4 },
    ];
    const result = Sort.sortPopularity(myObjects);
    expect(result).to.eql([{ numPlays: 4 }, { numPlays: 1 }]);
  });
});
