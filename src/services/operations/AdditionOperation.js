const OperationTask = require('./OperationTask');

class AdditionOperation extends OperationTask {
  constructor() {
    super();
    this.name = process.env.ADDITION;
  }

  calculate(operation) {
    this.validateOperation(operation);
    return operation.left + operation.right;
  }
}

module.exports = AdditionOperation;
