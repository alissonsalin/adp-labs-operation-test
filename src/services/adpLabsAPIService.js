const https = require('https');
const ErrorManager = require('./ErrorManager');

/**
 * If the status code is lower than 220 (SUCCESS) or greater then 299 (Last code Unassigned)
 * then return an error
 * @param {Response} the response result
 * @return {Error} common errors - 400, 404, 503 
 */
function validateRequest(res) {
  if (res.statusCode < process.env.STATUS_CODE_SUCCESS 
    || res.statusCode >= process.env.STATUS_CODE_BEGIN_ERRORS) {
    const errorMessage = new ErrorManager().error(res.statusCode);
    return errorMessage;
  }
  return null;
}

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
      const requestErrorsResult = validateRequest(res);
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
      reject(new Error('Request time out'));
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
      if (res.statusCode < process.env.STATUS_CODE_SUCCESS 
        || res.statusCode >= process.env.STATUS_CODE_BEGIN_ERRORS) {
        return reject(new Error(`HTTP status code ${res.statusCode}`));
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
      reject(new Error('Request time out'));
    });

    req.end();
  });
}

module.exports = {
  post,
  get,
};
