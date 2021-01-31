import ToDoItem from "./toDoItems.js";
class ProjectItem {
  constructor(title) {
    this.title = title;
    this.tasks = [];
    console.log(this);
  }
  newTask(title, description, dueDate, priority) {
    this.tasks.push(new ToDoItem(title, description, dueDate, priority));
    console.log(this);
  }
}
export default ProjectItem;
