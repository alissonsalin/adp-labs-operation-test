const cron = require('node-cron');
const operationService = require('./services/operationService');
require('dotenv').config();

async function doOperation() {
  return operationService.doOperation()
    .then((result) => result)
    .catch((error) => error.message);
}

async function schedulerTaksOperation() {
  console.log();
  cron.schedule(process.env.SCHEDULER_CRON, () => {
    (async () => {
      const taskResult = await doOperation();
      console.log(taskResult);
      console.log();
    })();
  });
}
schedulerTaksOperation();

console.log();
console.log(' =========================================================================================');
console.log('||                                                                                       ||');
console.log(`||                       SCHEDULER RUNNING EVERY ${process.env.SCHEDULER_TIME} SECONDS                               ||`);
console.log('||                       CTRL + C TO SHUTDOWN                                            ||');
console.log('||                                                                                       ||');
console.log(' =========================================================================================');
