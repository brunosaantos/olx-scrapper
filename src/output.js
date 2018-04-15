const columnify = require('columnify');
const { sort } = require('./helpers');

const print = (data) => {
  const options = {
    truncate: true,
    columnSplitter: ' | ',
    config: {
      title: { maxWidth: 50 },
    },
  };

  console.log(columnify(data.sort(sort('price')), options));
};

module.exports = {
  print,
};
