import ProjectItem from "./projectItems.js";

function getProjectsFromLocalStorage() {
  let currentProjects = [];
  if (isItemInLocalStorage("currentProjects")) {
    currentProjects = [];
    let tempArray = JSON.parse(localStorage.getItem("currentProjects"));

    tempArray.forEach(function (project) {
      let tempProject = new ProjectItem(project.title);
      tempProject.tasks = [...project.tasks];
      currentProjects.push(tempProject);
    });
  } else {
    currentProjects = [new ProjectItem("default project")];
  }
  return currentProjects;
}

function saveProjectsToLocalStorage(array) {
  localStorage.setItem("currentProjects", JSON.stringify(array));
}

function isItemInLocalStorage(item) {
  return localStorage.getItem(item) !== null;
}

export {
  getProjectsFromLocalStorage,
  saveProjectsToLocalStorage,
  isItemInLocalStorage,
};
