const OperationTask = require('./OperationTask');

class MultiplicationOperation extends OperationTask {
  constructor() {
    super();
    this.name = process.env.MULTIPLICATION;
  }

  calculate(operation) {
    this.validateOperation(operation);
    return operation.left * operation.right;
  }
}

module.exports = MultiplicationOperation;
