let tasks = ['task 1'];

function addTask(task) {
  tasks.push(task);
}

function removeTaskByName(task) {
  if (tasks.indexOf(task) !== -1) {
    tasks.splice(tasks.indexOf(task), 1);
  }
}

function moveTaskByName(task) {
  if (tasks.indexOf(task) !== -1) {
    removeTaskByName(task);
    tasks.unshift(task);
  }
}

console.log(tasks);
addTask('task 2');
addTask('task 3');
addTask('task 4');
addTask('task 5');
console.log(tasks);
removeTaskByName('task 2');
removeTaskByName('task 22');
console.log(tasks);
moveTaskByName('task 4');
console.log(tasks);