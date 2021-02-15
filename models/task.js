const { v4: uuidv4 } = require("uuid");

class Task {
  id = "";
  desc = "";
  completeOn = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.completeOn = null;
  }
}

module.exports = Task;
