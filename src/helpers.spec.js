const { sort } = require('./helpers');

describe('sort', () => {
  test('it should sort an array of objects', () => {
    const input = [{ price: 40000 }, { price: 20000 }];
    const expectedResponse = [{ price: 20000 }, { price: 40000 }];

    expect(input.sort(sort('price'))).toEqual(expectedResponse);
  });

  test('it should sort an array of objects (reverse order)', () => {
    const input = [{ price: 40000 }, { price: 20000 }];
    const expectedResponse = [{ price: 40000 }, { price: 20000 }];

    expect(input.sort(sort('-price'))).toEqual(expectedResponse);
  });
});

