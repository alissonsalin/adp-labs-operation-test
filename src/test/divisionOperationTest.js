const assert = require('assert');
const mocha = require('mocha');
const DivisionOperation = require('../services/operations/DivisionOperation');
const dataGenerator = require('./data/DivisionDataGenerator');

const {
  before, after, beforeEach, describe, it,
} = mocha;

require('dotenv').config();

describe('DIVISION TEST', () => {
  let divisionOperation = null;
  let taskOperation = {};
  const successTestData = dataGenerator.createSuccessTestData();
  const throwingTestData = dataGenerator.createThrowingTestData();
  before(() => {
    divisionOperation = new DivisionOperation();
    taskOperation = {
      id: '1',
      operation: 'division',
      left: 0,
      right: 0,
    };
  });

  after(() => {
    console.log('FINISHED DIVISION TEST');
  });

  describe('Success test group', () => {
    beforeEach(() => {

    });

    successTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        assert.equal(divisionOperation.calculate(taskOperation), testData.result);
      });
    });
  });

  describe('Throws test group', () => {
    beforeEach(() => {
      divisionOperation = new DivisionOperation();
    });

    throwingTestData.forEach((testData) => {
      it(testData.testDescription, () => {
        taskOperation.left = testData.left;
        taskOperation.right = testData.right;
        const result = () => divisionOperation.calculate(taskOperation);
        assert.throws(result, testData.result);
      });
    });
  });
});
