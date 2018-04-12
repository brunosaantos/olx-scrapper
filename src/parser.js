const cheerio = require('cheerio');
const selectors = require('./selectors');

let $ = '';

const getCars = () => $(selectors.cars());

const getParsedYear = (title) => {
  const match = /[- ]\d{4}/.exec(title);
  if (!match) return '';

  return match[0].trim();
};

const parseAD = (car) => {
  const $car = $(car);
  const title = $car.find(selectors.carTitle()).text().trim();
  const detail = $car.find(selectors.carDetails()).text().trim();
  const price = $car.find(selectors.carPrice()).text().trim();
  const year = getParsedYear(title);

  return {
    title,
    detail,
    price,
    year,
  };
};

const run = (html) => {
  $ = cheerio.load(html);

  return getCars().toArray().map(parseAD);
};

module.exports = {
  run,
};
