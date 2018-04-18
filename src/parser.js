const cheerio = require('cheerio');
const terminalLink = require('terminal-link');
const selectors = require('./selectors');

let $ = '';

const getCars = () => $(selectors.cars);

const getParsedYear = (title) => {
  const match = /[- ]\d{4}/.exec(title);
  if (!match) return '';

  return match[0].trim();
};

const parseAD = (car) => {
  const $car = $(car);
  const title = $car.find(selectors.carTitle).text().trim();
  const detail = $car.find(selectors.carDetails).text().trim().replace(/\s{3}/g, '');
  const price = $car.find(selectors.carPrice).text().trim();
  const link = $car.find(selectors.carLink).attr('href') ? terminalLink('Link', $car.find(selectors.carLink).attr('href')) : '';
  const year = getParsedYear(title);

  return {
    title,
    detail,
    price,
    year,
    link,
  };
};

const run = (html) => {
  $ = cheerio.load(html);

  return getCars().toArray().map(parseAD);
};

module.exports = {
  run,
};
