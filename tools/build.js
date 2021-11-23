// More info on Webpack's Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */

const webpack = require('webpack');
const config = require('../webpack.config');
const chalkConfig = require('./chalkConfig');

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

console.log(chalkConfig.chalkProcessing('Generating minified bundle. This will take a moment...'));

webpack(config).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    console.log(chalkConfig.chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.errors.length > 0) {
    return jsonStats.errors.map(error => console.log(chalkConfig.chalkError(error)));
  }

  if (jsonStats.warnings.length > 0) {
    console.log(chalkConfig.chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalkConfig.chalkWarning(warning)));
  }

  // if we got this far, the build succeeded.
  console.log(chalkConfig.chalkSuccess('App ready.'));

  return 0;
});
