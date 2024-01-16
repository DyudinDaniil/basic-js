const tasks = ['task 1'];

const findIndexOfTask = (task) => tasks.indexOf(task);

const addTask = (task) => tasks.push(task);

const removeTaskByName = (task) => {
  const index = findIndexOfTask(task);
  tasks.splice(index, 1);
}

const moveTaskByName = (task) => {
  removeTaskByName(task);
  tasks.unshift(task);
}


addTask('task 2');
addTask('task 3');
addTask('task 4');

console.log(tasks);

removeTaskByName('task 2');

console.log(tasks);

moveTaskByName('task 4');

console.log(tasks);