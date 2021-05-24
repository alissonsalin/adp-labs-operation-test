const validationManager = require('../validationManager');

class OperationTask {
  validateOperation(operation) {
    return validationManager.validateOperation(operation);
  }
}

module.exports = OperationTask;
