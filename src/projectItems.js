class ProjectItem {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }
  newTask(title, description, dueDate, priority) {
    this.tasks.push({title, description, dueDate, priority});
  }  
}
export default ProjectItem;
