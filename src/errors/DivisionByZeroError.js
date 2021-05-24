class DivisionByZeroError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_DIVISION_BY_ZERO_ERROR, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_DIVISION_BY_ZERO_ERROR);
  }
}

module.exports = DivisionByZeroError;
