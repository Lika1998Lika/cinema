import { generateTask } from "../mock/tasks.js"

export default class TasksModel {
  tasks = Array.from({length: 5}, generateTask)

  getTasks = () => this.tasks;
}
