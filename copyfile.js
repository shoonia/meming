/* eslint no-console: off */
const fs = require('fs');

const reset = '\x1b[0m';
const redColor = '\x1b[31m';
const greenColor = '\x1b[32m';

fs.copyFile('./build/index.html', './build/200.html', (error) => {
  if (error) {
    console.error(
      redColor,
      'index.html could not be copied to 404.html',
      reset,
    );
    throw error;
  }
  console.info(
    greenColor,
    'index.html was copied to 404.html',
    reset,
  );
});
