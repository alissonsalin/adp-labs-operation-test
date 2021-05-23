const assert = require('assert');
const mocha = require('mocha');
const AddiontionOperation = require('../services/operations/AdditionOperation');
const dataGenerator = require('./data/additionDataGenerator');

const {
  before, after, beforeEach, describe, it,
} = mocha;

require('dotenv').config();

describe('ADDITION TEST', () => {
  let additionOperation = null;
  let taskOperation = {};
  const successTestData = dataGenerator.createSuccessTestData();
  const throwingTestData = dataGenerator.createThrowingTestData();
  before(() => {
    additionOperation = new AddiontionOperation();
    taskOperation = {
      id: '1',
      operation: 'addition',
      left: 0,
      right: 0,
    };
  });

  after(() => {
    console.log('FINISHED ADDITION TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    successTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        assert.equal(additionOperation.calculate(taskOperation), testData.result);
      });
    });
  });

  describe('Throws test group', () => {
    beforeEach(() => {
      additionOperation = new AddiontionOperation();
    });

    throwingTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        const result = () => additionOperation.calculate(taskOperation);
        assert.throws(result, testData.result);
      });
    });
  });
});
