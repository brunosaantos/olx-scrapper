const fetch = require('node-fetch');
const queryString = require('query-string');

const parser = require('./parser');

const getUrl = ({ maxKm, minKm, maxPrice, minPrice, page, location }) => {
  const qs = {
    ms: minKm,
    me: maxKm,
    ps: minPrice,
    pe: maxPrice,
    o: page,
  };

  return `http://${location}.olx.com.br/regioes-de-pelotas-rio-grande-e-bage/veiculos-e-pecas/carros?${queryString.stringify(qs)}`;
};

const getHtml = async (url) => {
  const res = await fetch(url);
  return res.text();
};

const init = async (params) => {
  const html = await getHtml(getUrl(params));
  const parsedCars = parser.run(html);

  parsedCars.forEach(car => console.log(`${car.title} || ${car.year} || ${car.price}`));
};

module.exports = {
  init,
};
