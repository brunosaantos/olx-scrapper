const program = require('commander');
const { init } = require('./app');

program
  .version('v1.0.0')
  .option('-l, --location <location>', 'set your location')
  .option('-r, --region <location>', 'set your region')
  .option('-mnk, --min-km <min>', 'set your min km range')
  .option('-mxk, --max-km <max>', 'set your max km range')
  .option('-mnp, --min-price <min>', 'set your min price range')
  .option('-mxp, --max-price <max>', 'set your max price range')
  .option('-mk, --make <make>', 'set the maker')
  .option('-mo, --model <model>', 'set the model')
  .parse(process.argv);

try {
  const defaultParams = {
    location: 'rs',
    region: 'regioes-de-pelotas-rio-grande-e-bage',
  };

  const params = Object.assign(defaultParams, program);

  init(params);
} catch (err) {
  console.error(err);
}
