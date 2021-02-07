const asideWrapper = document.querySelector("#aside-wrapper");
const main = document.querySelector("#main");

function renderProjects(projects) {
  asideWrapper.innerHTML = "";
  if (projects.length) {
    projects.forEach((element) => {
      const newProj = document.createElement("h3");
      newProj.innerHTML = `<h3>${element.title}</h3>`;
      asideWrapper.appendChild(newProj);
    });
  }
}

function renderTasks(project) {
  if (project.tasks.length) {
    main.innerHTML = `<button id="addNewTask">NEW TASK</button>`;
    project.tasks.forEach((item) => {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `<p>Title: ${item.title}</p>
      <p>Description: ${item.description}</p>
      <p>Due date: ${item.dueDate}</p>
      <p>Priority: ${item.priority}</p>`;
      main.appendChild(newDiv);
    });
  }
}

export { renderProjects, renderTasks };
