const fetchMock = require('fetch-mock');
const pageFetcher = require('./pageFetcher');

test('it should call the fetch method with the correct url', async () => {
  const url = 'http://fake.com';

  fetchMock.get(url, 'foo');
  await pageFetcher.fetchPage(url);

  expect(fetchMock.called(url)).toBeTruthy();
  fetchMock.restore();
});
