import './style.css';
import tasks, { TASK_ID } from './modules/data';

// Dom items
const todoContainerElem = document.getElementById('todo-items');
const newItemElem = document.getElementById('add-item');

const tripleDotHTML = `
  <div id="triple-dot">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
`;

const getCurrentTaskID = () => {
  tasks.sort((a, b) => a.index - b.index);
  return tasks.at(-1).index;
};

const getTasksFromLocalStorage = () => {};

const createTaskElem = (task) => {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  const checkBox = document.createElement('input');
  const textItem = document.createElement('p');
  textItem.innerText = task.description;
  checkBox.type = 'checkbox';
  checkBox.classList.add('status');
  listItem.appendChild(checkBox);
  listItem.appendChild(textItem);
  listItem.insertAdjacentHTML('beforeend', tripleDotHTML);
  return listItem;
};

const displayTaskElem = (task) => {
  const listItemElem = createTaskElem(task);
  todoContainerElem.appendChild(listItemElem);
  console.log(task);
};

const displayAllTasks = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    displayTaskElem(task);
  });
};

const createTask = (keyPressed) => {
  if (keyPressed.key === 'Enter') {
    TASK_ID[0] = getCurrentTaskID();
    TASK_ID[0] += 1;
    const task = {
      description: newItemElem.value,
      completed: false,
      index: TASK_ID[0],
    };
    displayTaskElem(task);
  }
};

window.onload = displayAllTasks;
newItemElem.onkeyup = createTask;
