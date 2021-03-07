import uniqid from "../node_modules/uniqid/index.js";
class ProjectItem {
  constructor(title) {
    this.title = title;
    this.id = uniqid('proj-');
    this.tasks = [];
  }
  newTask(title, description, dueDate, priority) {
    this.tasks.push({title, description, dueDate, priority});
  }  
}
export default ProjectItem;
