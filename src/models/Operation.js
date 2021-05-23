class Operation {
  constructor(json) {
    this.id = json.id;
    this.operation = json.operation;
    this.left = json.left;
    this.right = json.right;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Operation;
