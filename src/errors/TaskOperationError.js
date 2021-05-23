class TaskOperationError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_VALIDATION_ERROR, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_TASK_OPERATION_ERROR);
  }
}

module.exports = TaskOperationError;
