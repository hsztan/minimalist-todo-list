const {
  displayAllTasks,
  createTask,
  clearAllCompletedTasks,
} = require('./helpers');

// Dom items
const newItemElem = document.getElementById('add-item');
const addIconElem = document.getElementById('add-icon');
const resetCompletedElem = document.getElementById('reset-completed');
const btnClearCompletedElem = document.getElementById('clear-completed');

const startApp = () => {
  window.onload = displayAllTasks;
  newItemElem.onkeyup = createTask;
  addIconElem.onclick = createTask;
  resetCompletedElem.onclick = clearAllCompletedTasks;
  btnClearCompletedElem.onclick = clearAllCompletedTasks;
};

module.exports = { startApp };
