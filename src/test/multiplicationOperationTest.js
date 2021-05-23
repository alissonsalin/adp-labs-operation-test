const assert = require('assert');
const mocha = require('mocha');
const MultiplicationOperation = require('../services/operations/MultiplicationOperation');
const dataGenerator = require('./data/multiplicationDataGenerator');

const {
  before, after, beforeEach, describe, it,
} = mocha;

require('dotenv').config();

describe('MULTIPLICATION TEST', () => {
  let multiplicationOperation = null;
  let taskOperation = {};
  const successTestData = dataGenerator.createSuccessTestData();
  const throwingTestData = dataGenerator.createThrowingTestData();
  before(() => {
    multiplicationOperation = new MultiplicationOperation();
    taskOperation = {
      id: '1',
      operation: 'multiplication',
      left: 0,
      right: 0,
    };
  });

  after(() => {
    console.log('FINISHED MULTIPLICATION TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    successTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        assert.equal(multiplicationOperation.calculate(taskOperation), testData.result);
      });
    });
  });

  describe('Throws test group', () => {
    beforeEach(() => {
      multiplicationOperation = new MultiplicationOperation();
    });

    throwingTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        const result = () => multiplicationOperation.calculate(taskOperation);
        assert.throws(result, testData.result);
      });
    });
  });
});
