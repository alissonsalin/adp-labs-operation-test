class IncorrectResultError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_INCORRECT_RESULT_ERROR, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_INCORRECT_RESULT_ERROR);
  }
}

module.exports = IncorrectResultError;
