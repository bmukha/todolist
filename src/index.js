import ProjectItem from "./projectItems.js";
let test = new ProjectItem('for testing purposes');

test.newTask('basic task', 'logging testing', Date.now(), 'high');

console.log (test);