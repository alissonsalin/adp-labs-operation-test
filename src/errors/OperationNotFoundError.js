class OperationNotFoundError {
  constructor() {
    this.name = '';
  }

  calculate(operation) {
    return process.env.MESSAGE_OPERATION_NOT_FOUND_ERROR.concat(operation);
  }
}

module.exports = OperationNotFoundError;
