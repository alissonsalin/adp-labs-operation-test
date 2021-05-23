const OperationTask = require('./OperationTask');

class RemainderOperation extends OperationTask {
  constructor() {
    super();
    this.name = process.env.REMAINDER;
  }

  calculate(operation) {
    this.validateOperation(operation);
    return operation.left % operation.right;
  }
}

module.exports = RemainderOperation;
