const http = require('http');
const fs = require('fs');
const operationService = require('./services/operationService');
require('dotenv').config();

async function doOperation() {
  return operationService.doOperation()
    .then((result) => result)
    .catch((error) => error.message);
}

const server = http.createServer();
server.on('request', async (req, res) => {
  const data = await doOperation();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(process.env.STATUS_CODE_SUCCESS, { 'Content-Type': 'text/html' });
  res.write(data);
  // better stream then file read
  // its not a good idea load all the file to memory
  fs.createReadStream('./src/pages/operation.html').pipe(res);
});

server.listen(parseInt(process.env.SERVER_PORT, 10));
console.log();
console.log(' =========================================================================================');
console.log('||                                                                                       ||');
console.log(`||                  SERVER RUNNING AT http://localhost:${process.env.SERVER_PORT}                              ||`);
console.log('||                  CTRL + C TO SHUTDOWN                                                 ||');
console.log('||                                                                                       ||');
console.log(' =========================================================================================');
