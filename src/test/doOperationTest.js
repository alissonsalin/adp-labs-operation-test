const assert = require('assert');
const mocha = require('mocha');
const operationService = require('../services/operationService');

const {
  before, after, beforeEach, describe, it,
} = mocha;

async function doOperation() {
  return operationService.doOperation()
    .then((result) => result)
    .catch((error) => error.message);
}

describe('DO OPERATION TEST', () => {
  before(() => {
  });

  after(() => {
    console.log('FINISHED OPERATION TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    it('do some calculation', async () => {
      const taskResult = await doOperation();
      assert.ok(taskResult);
      assert.equal(JSON.parse(taskResult).submitResult, 'Correct');
    });
  });
});
