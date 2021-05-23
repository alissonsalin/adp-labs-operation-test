const OperationTask = require('./OperationTask');

class SubtractionOperation extends OperationTask {
  constructor() {
    super();
    this.name = process.env.SUBTRACTION;
  }

  calculate(operation) {
    this.validateOperation(operation);
    return operation.left - operation.right;
  }
}

module.exports = SubtractionOperation;
