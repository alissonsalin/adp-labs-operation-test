class GenericError {
  constructor() {
    this.name = '';
  }

  error() {
    return new Error('ERROR');
  }
}

module.exports = GenericError;
