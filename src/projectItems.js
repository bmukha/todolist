import uniqid from "../node_modules/uniqid/index.js";
class ProjectItem {
  constructor(title) {
    this.title = title;
    this.id = uniqid('project-');
    this.tasks = [];
  }
  newTask(title, description, dueDate, priority) {
    let parentId = this.id;
    let taskId = uniqid('task-');
    this.tasks.push({parentId, taskId, title, description, dueDate, priority});
  }  
}
export default ProjectItem;
