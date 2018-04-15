const app = require('./app');

describe('it should return the full URL based on given parameters', () => {
  test('with make and model', () => {
    const params = {
      make: 'peugeot',
      model: '307',
      minKm: 40000,
      maxKm: 60000,
      location: 'rs',
    };

    const expectedURL = 'http://rs.olx.com.br/regioes-de-pelotas-rio-grande-e-bage/veiculos-e-pecas/carros/peugeot/307?me=60000&ms=40000';

    expect(app.getUrl(params)).toEqual(expectedURL);
  });

  test('without make and model', () => {
    const params = {
      minKm: 40000,
      maxKm: 60000,
      location: 'rs',
    };

    const expectedURL = 'http://rs.olx.com.br/regioes-de-pelotas-rio-grande-e-bage/veiculos-e-pecas/carros//?me=60000&ms=40000';

    expect(app.getUrl(params)).toEqual(expectedURL);
  });
});
