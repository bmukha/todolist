import { saveProjectsToLocalStorage } from "./storage.js";
import { currentProjects } from "./index.js";
const asideWrapper = document.querySelector("#aside-wrapper");
const main = document.querySelector("#main");

function renderProjects(projects) {
  asideWrapper.innerHTML = "";
  if (projects.length) {
    projects.forEach((element, index) => {
      const newProj = document.createElement("div");
      newProj.classList.add("project");
      newProj.id = element.id;
      newProj.tabIndex = index;
      const titleAndCloseDiv = document.createElement("div");
      titleAndCloseDiv.id = "title-and-close";
      const title = document.createElement("h3");
      title.textContent = element.title;
      titleAndCloseDiv.appendChild(title);
      const closeButton = document.createElement("button");
      closeButton.classList.add("close-icon");
      closeButton.style = "display:none";
      closeButton.addEventListener('click', (event) => {
        alert ("it works!");
      });
      titleAndCloseDiv.appendChild(closeButton);
      newProj.appendChild(titleAndCloseDiv);
      newProj.addEventListener("mouseover", (event) => {
        const newButton = document.querySelector(
          `#${event.currentTarget.id} > button`
        );
        newButton.style.display = "block";
        const closeButton = document.querySelector(
          `#${event.currentTarget.id} > #title-and-close > button`
        );
        closeButton.style.display = "block";
        let activeProject = currentProjects.find(
          (element) => element.id == event.currentTarget.id
        );
        renderTasks(activeProject);
      });
      newProj.addEventListener("mouseout", (event) => {
        // event.stopPropagation();
        // event.preventDefault();
        const newButton = document.querySelector(
          `#${event.currentTarget.id} > button`
        );
        newButton.style.display = "none";
        const closeButton = document.querySelector(
          `#${event.currentTarget.id} > #title-and-close > button`
        );
        closeButton.style.display = "none";
      });
      asideWrapper.appendChild(newProj);
      const addNewButton = document.createElement("button");
      addNewButton.classList.add("addNewButton");
      addNewButton.style.display = "none";
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
    newDiv.classList.add(item.parentId);
    newDiv.classList.add(item.taskId);
    newDiv.innerHTML = `<button class="close-icon"></button>
      <p>Title: ${item.title}</p>
      <p>Description: ${item.description}</p>
      <p>Due date: ${item.dueDate}</p>
      <p>Priority: ${item.priority}</p>`;
    main.appendChild(newDiv);
    const deleteButton = document.querySelector(
      `.task.${item.parentId}.${item.taskId} > button`
    );
    deleteButton.addEventListener("click", (event) => {
      const parentClasses = event.target.parentElement.classList;
      const parentId = parentClasses[1];
      const taskId = parentClasses[2];
      const findedParent = currentProjects.find(
        (element) => element.id == parentId
      );
      const findedTaskIndex = findedParent.tasks.findIndex(
        (element) => element.taskId == taskId
      );
      findedParent.tasks.splice(findedTaskIndex, 1);
      renderProjects(currentProjects);
      window.location.reload();
    });
  });
}

export { renderProjects, renderTasks };
