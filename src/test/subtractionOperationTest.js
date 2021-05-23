const assert = require('assert');
const mocha = require('mocha');
const SubtractionOperation = require('../services/operations/SubtractionOperation');
const dataGenerator = require('./data/subtractionDataGenerator');

const {
  before, after, beforeEach, describe, it,
} = mocha;

require('dotenv').config();

describe('SUBTRACTION TEST', () => {
  let subtractionOperation = null;
  let taskOperation = {};
  const successTestData = dataGenerator.createSuccessTestData();
  const throwingTestData = dataGenerator.createThrowingTestData();
  before(() => {
    subtractionOperation = new SubtractionOperation();
    taskOperation = {
      id: '1',
      operation: 'subtraction',
      left: 0,
      right: 0,
    };
  });

  after(() => {
    console.log('FINISHED SUBCTRACTION TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    successTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        assert.equal(subtractionOperation.calculate(taskOperation), testData.result);
      });
    });
  });

  describe('Throws test group', () => {
    beforeEach(() => {
      subtractionOperation = new SubtractionOperation();
    });

    throwingTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        const result = () => subtractionOperation.calculate(taskOperation);
        assert.throws(result, testData.result);
      });
    });
  });
});
