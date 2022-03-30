const { createTask } = require('./helpers');
const tasks = require('./data');

const inputElem = document.createElement('input');
inputElem.value = 'Aaron';

// inputElem.addEventListener('click', createTask);
const event = { constructor: { name: 'PointerEvent' } };
createTask(event);
console.log(tasks);
