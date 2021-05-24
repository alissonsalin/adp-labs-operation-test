const GenericError = require('../errors/GenericError');
const IdNotFoundError = require('../errors/IdNotFoundError');
const DataBaseComunicationError = require('../errors/DataBaseComunicationError');
const IncorrectResultError = require('../errors/IncorrectResultError');
const TaskOperationError = require('../errors/TaskOperationError');
const RequestTimeOutError = require('../errors/RequestTimeOutError');
const DivisionByZeroError = require('../errors/DivisionByZeroError');

require('dotenv').config();

class ErrorManager {
  constructor() {
    this.errors = [];
    this.init();
  }

  addError(error) {
    this.errors = [...this.errors, error];
  }

  getError(code) {
    return this.errors.find((error) => error.code === code);
  }

  error(code) {
    try {
      return this.getError(code).error();
    } catch (error) {
      throw new GenericError().error();
    }
  }

  buildReturnMessage(calculateResult, adpLabsResult) {
    const returnMessage = {
      task: calculateResult.operation,
      calculateResult: calculateResult.response.result,
      submitResult: adpLabsResult,
    };
    return JSON.stringify(returnMessage);
  }

  buildReturnErrorMessage(calculateResult, error) {
    return new Error(this.buildReturnMessage(calculateResult, error));
  }

  init() {
    this.addError(new IdNotFoundError());
    this.addError(new DataBaseComunicationError());
    this.addError(new IncorrectResultError());
    this.addError(new TaskOperationError());
    this.addError(new RequestTimeOutError());
    this.addError(new DivisionByZeroError());
  }
}

module.exports = new ErrorManager();
