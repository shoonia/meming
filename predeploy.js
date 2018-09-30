/* eslint no-console: off */
const fs = require('fs');
const https = require('https');
const { minify } = require('html-minifier'); // eslint-disable-line

const api = 'https://shoonia.wixsite.com/meme-api/_functions/sitemap';
const index = './build/index.html';
const sitemap = './build/sitemap.xml';

const reset = '\x1b[0m';
const redColor = '\x1b[31m';
const greenColor = '\x1b[32m';

const copyTo = dest => fs.copyFile(index, dest, (error) => {
  if (error) {
    console.error(
      redColor,
      `${index} could not be copied to ${dest}`,
      reset,
    );
    throw error;
  }
  console.info(
    greenColor,
    `${index} was copied to ${dest}`,
    reset,
  );
});

const getDate = (res) => {
  let xml = '';

  res.on('data', (chunk) => {
    xml += chunk;
  });

  res.on('end', () => {
    if (xml === '') {
      console.error(
        redColor,
        'sitemap.xml file could not be created!',
        reset,
      );
      throw new Error('Empty response data');
    }

    const xmlMin = minify(xml, { collapseWhitespace: true });
    fs.writeFile(sitemap, xmlMin, (error) => {
      if (error) {
        console.error(
          redColor,
          'sitemap.xml file could not be created!',
          reset,
        );
        throw error;
      }
      console.info(
        greenColor,
        `sitemap.xml was created to ${sitemap}`,
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

copyTo('./build/200.html');
copyTo('./build/404.html');
