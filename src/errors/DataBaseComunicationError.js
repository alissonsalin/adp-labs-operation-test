class DataBaseComunicationError {
  constructor() {
    this.code = parseInt(process.env.STATUS_CODE_DATABASE_COMMUNICATION_ERROR, 10);
  }

  error() {
    return new Error(process.env.MESSAGE_DATABASE_COMMUNICATION_ERROR);
  }
}

module.exports = DataBaseComunicationError;
