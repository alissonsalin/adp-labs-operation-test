const https = require('https');
const validationManager = require('./validationManager');
const errorManager = require('./ErrorManager');
require('dotenv').config();

/**
 * do generic POST
 * @param {String} url to post
 * @param {JSON} data is the operation
 * @return {Promise} task result from ADP Labs
 */
async function post(url, data) {
  const dataString = JSON.stringify(data);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length,
    },
    timeout: parseInt(process.env.REQUEST_TIMEOUT, 10), // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      const requestErrorsResult = validationManager.validatePOSTRequest(res);
      if (requestErrorsResult === null) {
        const body = [];
        res.on('data', (chunk) => body.push(chunk));
        res.on('end', () => {
          const resString = Buffer.concat(body).toString();
          resolve(resString);
        });
      } else {
        return reject(requestErrorsResult);
      }
      return false;
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(errorManager.error(process.env.STATUS_CODE_REQUEST_TIMEOUT));
    });

    req.write(dataString);
    req.end();
  });
}

/**
 * Do generic GET
 * @param {String} url to post
 * @return {Promise} task operation from ADP LABS
 */
async function get(url) {
  const options = {
    method: 'GET',
    timeout: parseInt(process.env.REQUEST_TIMEOUT, 10), // in ms
  };
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      const resultValidatGETRequest = validationManager.validateGETRequest(res);

      if (resultValidatGETRequest != null) {
        return reject(resultValidatGETRequest);
      }
      const body = [];
      res.on('data', (chunk) => body.push(chunk));
      res.on('end', () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
      return false;
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(errorManager.error(process.env.STATUS_CODE_REQUEST_TIMEOUT));
    });

    req.end();
  });
}

module.exports = {
  post,
  get,
};
