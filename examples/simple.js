const { Curl } = require('../dist/index.js');
const path = require('path');

// Set NSS environment variables
process.env.NSS_DEFAULT_DB_TYPE = 'sql';
process.env.NSS_DB_DIR = path.join(__dirname, '../nss/db');
// Tell NSS to skip certificate verification since we don't have a proper cert db
process.env.NSS_STRICT_NOFORK = 'DISABLED';
process.env.CURL_SSL_BACKEND = 'nss';

const curl = new Curl();
curl.setOpt('URL', 'https://www.google.com');
curl.setOpt('FOLLOWLOCATION', true);
curl.setOpt('VERBOSE', true);
// Skip certificate verification since we don't have a proper cert db
curl.setOpt('SSL_VERIFYPEER', false);
curl.setOpt('SSL_VERIFYHOST', false);

curl.on('end', function (statusCode, data, headers) {
    console.info(statusCode);
    console.info('---');
    console.info(data.length);
    console.info('---');
    console.info(this.getInfo('TOTAL_TIME'));
    this.close();
});

curl.on('error', function(error, errorCode) {
    console.error('Error:', error);
    console.error('Error code:', errorCode);
    this.close();
});

curl.perform();