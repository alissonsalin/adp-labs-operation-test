const OperationTask = require('./OperationTask');

class DivisionOperation extends OperationTask {
  constructor() {
    super();
    this.name = process.env.DIVISION;
  }

  calculate(operation) {
    this.validateOperation(operation);
    return operation.left / operation.right;
  }
}

module.exports = DivisionOperation;
