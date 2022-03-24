import tasks from './data';
import { saveTasksOnLocalStorage, displayAllTasks } from './startApp';

// change task status
const changeTaskStatus = (e) => {
  let divContainer = null;
  if (e.target.dataset.index) {
    divContainer = e.target;
  } else {
    divContainer = e.target.parentElement;
  }
  const idx = divContainer.dataset.index;
  const task = tasks[idx - 1];
  task.completed = !task.completed;
  divContainer.parentElement.classList.toggle('completed');
  saveTasksOnLocalStorage();
};

// create event listener on checkbox and select task
const addTaskChangeStatusEvent = (listItemElem) => {
  const divStatElem = listItemElem.querySelector('.status');
  divStatElem.onclick = changeTaskStatus;
};

// create event listener to clear all completed tasks
const clearAllCompletedTasks = () => {
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  tasks.push(...uncompletedTasks);
  saveTasksOnLocalStorage();
  displayAllTasks();
};
