const adpLabsApiService = require('./adpLabsAPIService');
const operationManager = require('./OperationManager');
const Operation = require('../models/Operation');
const validationManager = require('./validationManager');
const errorManager = require('./ErrorManager');

require('dotenv').config();

const getURL = process.env.ADPLABS_TAKS_OPERATION_URL;
const postURL = process.env.ADPLABS_SEND_OPERATION_RESULT_URL;

function validateOperation(operation) {
  validationManager.validateOperation(operation);
}

function calculate(data) {
  const operationJSON = JSON.parse(data);
  validateOperation(operationJSON);
  const operation = new Operation(operationJSON);
  const operationResult = operationManager.calculate(operation);
  const calculateResult = {
    operation,
    response: {
      id: operation.id,
      result: operationResult,
    },
  };
  return calculateResult;
}

function buildReturnMessage(calculateResult, adpLabsResult) {
  const returnMessage = {
    task: calculateResult.operation,
    calculateResult: calculateResult.response.result,
    submitResult: adpLabsResult,
  };
  return JSON.stringify(returnMessage);
}

function buildReturnErrorMessage(calculateResult, error) {
  return errorManager.buildReturnErrorMessage(calculateResult, error);
}

function doOperation() {
  return new Promise((resolve, reject) => {
    adpLabsApiService.get(getURL)
      .then((operation) => {
        const calculateResult = calculate(operation);
        adpLabsApiService.post(postURL, calculateResult.response)
          .then((adpLabsResult) => resolve(buildReturnMessage(calculateResult, adpLabsResult)))
          .catch((error) => reject(buildReturnErrorMessage(calculateResult, error.message)));
      })
      .catch((error) => reject(error));
  });
}

module.exports = {
  doOperation,
};
