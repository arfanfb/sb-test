// Centralized configuration for chalk, which is used to add color to console.log statements.
const chalk = require('chalk');
const chalkError = chalk.red;
const chalkProcessing = chalk.blue;
const chalkSuccess = chalk.green;
const chalkWarning = chalk.yellow;

module.exports = {
  chalkError: chalkError,
  chalkProcessing: chalkProcessing,
  chalkSuccess: chalkSuccess,
  chalkWarning: chalkWarning
};