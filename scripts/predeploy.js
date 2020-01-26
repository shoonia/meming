const fs = require('fs');
const path = require('path');
const https = require('https');
const chalk = require('chalk');

const api = 'https://shoonia.wixsite.com/meme-api/_functions/sitemap';
const index = path.resolve(__dirname, '../build/index.html');
const sitemap = path.resolve(__dirname, '../build/sitemap.xml');

const errorLog = error => console.log(chalk.red(error));
const infoLog = info => console.log(chalk.green(info));

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

    fs.writeFile(sitemap, xml, (error) => {
      if (error) {
        errorLog('sitemap.xml file could not be created!');
        throw error;
      }
      infoLog(`sitemap.xml was created to ${sitemap}`);
    });
  });
};

https.get(api, getDate).on('error', error => errorLog(`Oops! ${error}`));

copyTo(path.resolve(__dirname, '../build/200.html'));
copyTo(path.resolve(__dirname, '../build/404.html'));
