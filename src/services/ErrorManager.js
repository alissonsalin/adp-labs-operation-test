const GenericError = require('../errors/GenericError');
const IdNotFoundError = require('../errors/IdNotFoundError');
const DataBaseComunicationError = require('../errors/DataBaseComunicationError');
const IncorrectResultError = require('../errors/IncorrectResultError');
const TaskOperationError = require('../errors/TaskOperationError');
const RequestTimeOutError = require('../errors/RequestTimeOutError');

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

  init() {
    this.addError(new IdNotFoundError());
    this.addError(new DataBaseComunicationError());
    this.addError(new IncorrectResultError());
    this.addError(new TaskOperationError());
    this.addError(new RequestTimeOutError());
  }
}

module.exports = new ErrorManager();
