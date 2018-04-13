global.fetch = require('node-fetch');

const fetchPage = async (url) => {
  try {
    const res = await global.fetch(url);
    return res.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  fetchPage,
};
