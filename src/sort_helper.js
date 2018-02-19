const sortAlphabetical = array => (
  // eslint-disable-next-line
  array.slice().sort((a, b) => ((a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
);

const sortPopularity = array => (
  // eslint-disable-next-line
  array.slice().sort((a, b) => ((a.numPlays < b.numPlays) ? 1 : ((b.numPlays < a.numPlays) ? -1 : 0)))
);

export default {
  sortAlphabetical,
  sortPopularity,
};
