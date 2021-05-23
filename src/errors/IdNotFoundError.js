class IdNotFoundError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_ID_NOT_FOUND_ERROR, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_ID_NOT_FOUND_ERROR);
  }
}

module.exports = IdNotFoundError;
