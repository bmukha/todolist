import ProjectItem from "./projectItems.js";
import { renderProjects, renderTasks } from "./dom.js";
import {
  getProjectsFromLocalStorage,
  saveProjectsToLocalStorage,
  isItemInLocalStorage,
} from "./storage.js";

let currentProjects = getProjectsFromLocalStorage();

renderProjects(currentProjects);

if (currentProjects.length) {
  renderTasks(currentProjects[currentProjects.length - 1]);
}

function addNewProject(title) {
  currentProjects.push(new ProjectItem(title));
  renderProjects(currentProjects);
}

window.addEventListener("beforeunload", function (event) {
  saveProjectsToLocalStorage(currentProjects);
});

function deleteAllProjects() {
  currentProjects = [];
  saveProjectsToLocalStorage(currentProjects);
}

const deleteAllProjectsButton = document.getElementById("deleteAll");
deleteAllProjectsButton.addEventListener("click", deleteAllProjects);

const addNewProjectButton = document.getElementById("addNewProject");
addNewProjectButton.addEventListener("click", () => {
  const title = prompt("Enter the title", "title");
  addNewProject(title);
});

export { currentProjects };
