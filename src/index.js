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

const updateTask = (idx, newValue) => {
  const task = tasks.find((task) => task.index === Number(idx));
  console.log(task);
  task.description = newValue;
  saveTasksOnLocalStorage();
};

// Listener for click on task li
const taskClickListener = (taskEle) => {
  taskEle.onclick = () => {
    console.log(taskEle);
    // TODO
  };
};

const taskEnterKeyListener = (valueEle) => {
  valueEle.onkeyup = (keyPress) => {
    // TODO
    if (keyPress.key === 'Enter') {
      const idx = valueEle.dataset.index;
      const newValue = valueEle.value;
      updateTask(idx, newValue);
    }
  };
};

const getCurrentTaskID = () => {
  if (!tasks.length) return 0;
  tasks.sort((a, b) => a.index - b.index);
  return tasks.at(-1).index;
};

const getTasksFromLocalStorage = () => {
  const stringTasks = localStorage.getItem('todo-tasks');
  if (stringTasks) {
    tasks.push(...JSON.parse(localStorage.getItem('todo-tasks')));
  }
};

const saveTasksOnLocalStorage = () => {
  console.log(tasks);
  const stringifiedTasks = JSON.stringify(tasks);
  localStorage.setItem('todo-tasks', stringifiedTasks);
};

const createTaskElem = (task) => {
  // create main list item
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');
  // create checkbox
  const checkBox = document.createElement('input');
  // create item for description
  const textItem = document.createElement('textarea');
  textItem.classList.add('description');
  // set task value
  textItem.value = task.description;
  textItem.dataset.index = task.index;
  textItem.setAttribute('rows', '1');
  checkBox.type = 'checkbox';
  checkBox.classList.add('status');
  listItem.appendChild(checkBox);
  listItem.appendChild(textItem);
  // insert triple dot icon
  listItem.insertAdjacentHTML('beforeend', tripleDotHTML);
  return listItem;
};

const displayTaskElem = (task) => {
  const listItemElem = createTaskElem(task);
  todoContainerElem.appendChild(listItemElem);
  taskClickListener(todoContainerElem);
  taskEnterKeyListener(listItemElem.children[1]);
};

const displayAllTasks = () => {
  getTasksFromLocalStorage();
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
    tasks.push(task);
    saveTasksOnLocalStorage();
    displayTaskElem(task);
  }
};

window.onload = displayAllTasks;
newItemElem.onkeyup = createTask;
