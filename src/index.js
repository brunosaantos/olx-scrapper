const program = require('commander');
const { init } = require('./app');

program
  .version('v1.0.0')
  .option('-l, --location <location>', 'set your location')
  .option('-mn, --min-km <min>', 'set your min km range')
  .option('-mx, --max-km <max>', 'set your max km range')
  .parse(process.argv);

try {
  const defaultParams = {
    location: 'rs',
  };

  const params = Object.assign(defaultParams, program);

  init(params);
} catch (err) {
  console.error(err);
}
