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
      newProj.innerHTML = `
      <div id="title-and-close">
        <h3>${element.title}</h3>
        <button class="close-icon" style="display:none"></button>
      </div>`;
      newProj.addEventListener("mouseover", (event) => {
        // event.stopPropagation();
        // event.preventDefault();
        console.log(currentProjects);
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
    const deleteButton = document.querySelector(`.task.${item.parentId}.${item.taskId} > button`);
    deleteButton.addEventListener('click', () => {
      alert ('it works!');
    })
  });
}

export { renderProjects, renderTasks };
