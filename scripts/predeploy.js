/* eslint no-console: off */
const fs = require('fs');
const https = require('https');
const { minify } = require('html-minifier'); // eslint-disable-line

const api = 'https://shoonia.wixsite.com/meme-api/_functions/sitemap';
const index = './build/index.html';
const sitemap = './build/sitemap.xml';

const errorLog = error => console.error(
  '\x1b[31m', // red color
  error,
  '\x1b[0m', // reset color
);

const infoLog = info => console.info(
  '\x1b[32m', // green color
  info,
  '\x1b[0m', // reset color
);

const copyTo = dest => fs.copyFile(index, dest, (error) => {
  if (error) {
    errorLog(`${index} could not be copied to ${dest}`);
    throw error;
  }
  infoLog(`${index} was copied to ${dest}`);
});

const getDate = (res) => {
  let xml = '';

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    xml += chunk;
  });

  res.on('end', () => {
    if (xml === '') {
      errorLog('sitemap.xml file could not be created!');
      throw new Error('Empty response data');
    }

    const xmlMin = minify(xml, { collapseWhitespace: true });

    fs.writeFile(sitemap, xmlMin, (error) => {
      if (error) {
        errorLog('sitemap.xml file could not be created!');
        throw error;
      }
      infoLog(`sitemap.xml was created to ${sitemap}`);
    });
  });
};

https.get(api, getDate).on('error', error => errorLog(`Oops! ${error}`));

copyTo('./build/200.html');
copyTo('./build/404.html');
