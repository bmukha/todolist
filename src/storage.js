import ProjectItem from "./projectItems.js";

function getProjectsFromLocalStorage() {
  let currentProjects = [];
  if (isItemInLocalStorage("currentProjects")) {
    let tempArray = JSON.parse(localStorage.getItem("currentProjects"));
    if (tempArray.length) {
      tempArray.forEach(function (project) {
        let tempProject = new ProjectItem(project.title);
        tempProject.tasks = [...project.tasks];
        tempProject.tasks.forEach(element => element.parentId = tempProject.id);
        currentProjects.push(tempProject);
      });
    } else {
      currentProjects = [new ProjectItem("default project")];
    }
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
