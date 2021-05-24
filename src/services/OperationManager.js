const AdditionOperation = require('./operations/AdditionOperation');
const SubtractionOperation = require('./operations/SubtractionOperation');
const MultiplicationOperation = require('./operations/MultiplicationOperation');
const DivisionOperation = require('./operations/DivisionOperation');
const RemainderOperation = require('./operations/RemainderOperation');
const OperationNotFoundError = require('../errors/OperationNotFoundError');

class OperationManager {
  constructor() {
    this.operationServices = [];
    this.init();
  }

  addOperationService(operationService) {
    this.operationServices = [...this.operationServices, operationService];
  }

  getOperationService(name) {
    return this.operationServices.find((operationService) => operationService.name === name);
  }

  calculate(operation) {
    try {
      return this.getOperationService(operation.operation).calculate(operation);
    } catch (error) {
      throw new Error(new OperationNotFoundError().calculate(operation));
    }
  }

  init() {
    this.addOperationService(new AdditionOperation());
    this.addOperationService(new SubtractionOperation());
    this.addOperationService(new MultiplicationOperation());
    this.addOperationService(new DivisionOperation());
    this.addOperationService(new RemainderOperation());
  }
}

module.exports = new OperationManager();
