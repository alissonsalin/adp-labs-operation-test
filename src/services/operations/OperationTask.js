const validationManager = require('../ValidationManager');
const ErrorManager = require('../ErrorManager');

class OperationTask {
  validateOperation(operation) {
    const validationOperationResult = validationManager.validateOperation(operation);
    if (validationOperationResult != null && validationOperationResult.length > 0) {
      const error = new ErrorManager()
        .error(parseInt(process.env.STATUS_CODE_VALIDATION_ERROR, 10));
      error.message = error.message.concat(' ')
      + validationOperationResult[0].dataPath.concat(' ')
      + validationOperationResult[0].message.concat(' ');
      throw error;
    }
    return null;
  }
}

module.exports = OperationTask;
