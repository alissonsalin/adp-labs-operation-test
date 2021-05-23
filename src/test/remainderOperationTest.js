const assert = require('assert');
const mocha = require('mocha');
const RemainderOperation = require('../services/operations/RemainderOperation');
const dataGenerator = require('./data/remainderDataGenerator');

const {
  before, after, beforeEach, describe, it,
} = mocha;

require('dotenv').config();

describe('REMAINDER TEST', () => {
  let remainderOperation = null;
  let taskOperation = {};
  const successTestData = dataGenerator.createSuccessTestData();
  const throwingTestData = dataGenerator.createThrowingTestData();
  before(() => {
    remainderOperation = new RemainderOperation();
    taskOperation = {
      id: '1',
      operation: 'remainder',
      left: 0,
      right: 0,
    };
  });

  after(() => {
    console.log('FINISHED REMAINDER TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    successTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        assert.equal(remainderOperation.calculate(taskOperation), testData.result);
      });
    });
  });

  describe('Throws test group', () => {
    beforeEach(() => {
      remainderOperation = new RemainderOperation();
    });

    throwingTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        const result = () => remainderOperation.calculate(taskOperation);
        assert.throws(result, testData.result);
      });
    });
  });
});
