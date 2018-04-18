const columnify = require('columnify');
const { sort } = require('./helpers');

const print = (data) => {
  const options = {
    columnSplitter: ' | ',
  };

  console.log(columnify(data.sort(sort('price')), options));
};

module.exports = {
  print,
};
