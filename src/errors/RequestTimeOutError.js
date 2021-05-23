class RequestTimeOutError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_REQUEST_TIMEOUT, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_REQUEST_TIME_OUT);
  }
}

module.exports = RequestTimeOutError;
