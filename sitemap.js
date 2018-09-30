/* eslint no-console: off */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { minify } = require('html-minifier'); // eslint-disable-line

const api = 'https://shoonia.wixsite.com/meme-api/_functions/sitemap';
const sitemap = path.resolve(__dirname, './build/sitemap.xml');

const reset = '\x1b[0m';
const redColor = '\x1b[31m';
const greenColor = '\x1b[32m';

const getDate = (res) => {
  let xml = '';

  res.on('data', (chunk) => {
    xml += chunk;
  });

  res.on('end', () => {
    if (xml === '') {
      throw new Error('sitemap.xml file could not be created!');
    }

    const xmlMin = minify(xml, { collapseWhitespace: true });
    fs.writeFile(sitemap, xmlMin, (error) => {
      if (error) throw error;

      console.info(
        greenColor,
        'sitemap.xml was created.',
        reset,
      );
    });
  });
};

https.get(api, getDate).on('error', (error) => {
  console.error(
    redColor,
    `Oops! ${error}`,
    reset,
  );
});
