import { saveProjectsToLocalStorage } from "./storage.js";
import { currentProjects } from "./index.js";
const asideWrapper = document.querySelector("#aside-wrapper");
const main = document.querySelector("#main");

function renderProjects(projects) {
  asideWrapper.innerHTML = "";
  if (projects.length) {
    projects.forEach((element) => {
      const newProj = document.createElement("div");
      newProj.classList.add("project");
      newProj.id = element.id;
      newProj.innerHTML = `
      <div id="title-and-close">
        <h3>${element.title}</h3>
        <button class="close-icon"></button>
      </div>`;
      newProj.addEventListener("click", (event) => {
        event.stopPropagation;
        event.preventDefault;
        console.log(event.currentTarget);
        console.log(event.currentTarget.id);
      });
      asideWrapper.appendChild(newProj);
      const addNewButton = document.createElement("button");
      addNewButton.classList.add("addNewButton");
      addNewButton.textContent = "new task";
      addNewButton.addEventListener("click", () => {
        addNewTask(element);
      });
      newProj.appendChild(addNewButton);
    });
  }
}

function addNewTask(project) {
  let title = prompt("Enter title", "title");
  let description = prompt("Enter description", "description");
  let dueDate = prompt("Enter due date", "due date");
  let priority = prompt("Enter priority", "priority");
  project.newTask(title, description, dueDate, priority);
  saveProjectsToLocalStorage(currentProjects);
  renderTasks(project);
}

function renderTasks(project) {
  if (!project & !project.tasks & !project.tasks.length) {
    return;
  }
  main.innerHTML = "";
  project.tasks.forEach((item) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.innerHTML = `<button class="close-icon"></button>
      <p>Title: ${item.title}</p>
      <p>Description: ${item.description}</p>
      <p>Due date: ${item.dueDate}</p>
      <p>Priority: ${item.priority}</p>`;
    main.appendChild(newDiv);
  });
}

export { renderProjects, renderTasks };
