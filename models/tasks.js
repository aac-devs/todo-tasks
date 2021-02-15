/*
_list:
  { 'uuid-1234578-14353224-2: { id: 12, desc: 'fdadf', completeOn: '1567261'}}
*/

const Task = require("./task");

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  fullList() {
    console.log();
    this.listArr.forEach((task, i) => {
      console.log(
        `${`${i + 1}.`.green} ${task.desc} :: ${
          task.completeOn ? `Completed`.green : `Pending`.red
        }`
      );
    });
  }

  listPendingCompleted(completed = true) {
    console.log();
    this.listArr.forEach((task, i) => {
      const status = task.completeOn ? true : false;
      if (status === completed) {
        console.log(
          `${`${i + 1}.`.green} ${task.desc} :: ${
            completed ? `${task.completeOn}`.green : `Pending`.red
          }`
        );
      }
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completeOn) {
        task.completeOn = new Date().toISOString();
      }
    });
    this.listArr.forEach((task) => {
      if (!ids.includes(task.id)) {
        this._list[task.id].completeOn = null;
      }
    });
  }
}

module.exports = Tasks;
