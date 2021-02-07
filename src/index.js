import ProjectItem from "./projectItems.js";
import { renderProjects, renderTasks } from "./dom.js";
import {
  getProjectsFromLocalStorage,
  saveProjectsToLocalStorage,
  isItemInLocalStorage,
} from "./storage.js";

let currentProjects = isItemInLocalStorage()
  ? getProjectsFromLocalStorage()
  : [new ProjectItem("default project")];


renderProjects(currentProjects);

function addNewProject(title) {
  currentProjects.push(new ProjectItem(title));
  renderProjects(currentProjects);
}




window.addEventListener("beforeunload", function( event ) {
  saveProjectsToLocalStorage(currentProjects);
});




function deleteAllProjects() {
  currentProjects = [];
  saveProjectsToLocalStorage((currentProjects));
  renderProjects(currentProjects);
}

const deleteAllProjectsButton = document.getElementById("deleteAll");
deleteAllProjectsButton.addEventListener("click", deleteAllProjects);

const addNewProjectButton = document.getElementById("addNewProject");
addNewProjectButton.addEventListener("click", () => {
  const title = prompt("Enter the title", "title");
  addNewProject(title);
});


 const addNewTaskButton = document.querySelector("#addNewTask");

let activeProject = currentProjects[currentProjects.length - 1];
console.log(activeProject);

function addNewTask() {
  let title = prompt("Enter title", "title");
  let description = prompt("Enter description", "description");
  let dueDate = prompt("Enter due date", "due date");
  let priority = prompt("Enter priority", "priority");
  activeProject.newTask(title, description, dueDate, priority);
  saveProjectsToLocalStorage(currentProjects);
  renderTasks(activeProject);
}

addNewTaskButton.addEventListener("click", addNewTask);


