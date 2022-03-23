import tasks, { TASK_ID } from './data';

// Dom items
const todoContainerElem = document.getElementById('todo-items');
const newItemElem = document.getElementById('add-item');
const addIconElem = document.getElementById('add-icon');

const tripleDotHTML = `
  <div id="triple-dot">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
`;

const saveTasksOnLocalStorage = () => {
  const stringifiedTasks = JSON.stringify(tasks);
  localStorage.setItem('todo-tasks', stringifiedTasks);
};

const updateTask = (taskEle) => {
  if (taskEle) {
    const inputField = taskEle.children[1];
    const newValue = inputField.value;
    const idx = inputField.dataset.index;
    const task = tasks.find((task) => task.index === Number(idx));
    if (!task) return;
    task.description = newValue;
    saveTasksOnLocalStorage();
  }
};

const resetTasksIndexes = () => {
  // select all task elements on DOM
  const tasksElems = document.querySelectorAll('.todo-item');
  tasks.forEach((task, i) => {
    task.index = i + 1;
    tasksElems[i].id = `task-${i + 1}`;
    tasksElems[i].querySelector('.description').dataset.index = i + 1;
  });
};

// Remove task from array, localStorage and DOM
// and reset all task Id's
const deleteAndRemoveTask = (e) => {
  const taskToRemoveEle = e.target.parentElement.parentElement;
  const inputField = taskToRemoveEle.children[1];
  const idx = inputField.dataset.index;
  tasks.splice(idx - 1, 1);
  taskToRemoveEle.remove();
  resetTasksIndexes();
  saveTasksOnLocalStorage();
};

// Listener for ACTIVATING FOCUS ON TASK INPUT
const taskOnFocusListener = (taskEle) => {
  // Seelect input field to focus
  const inputField = taskEle.children[1];
  inputField.onfocus = () => {
    const idx = inputField.dataset.index;
    taskEle.style.backgroundColor = '#fffed2';
    // Change icon to trash can
    const iconContainer = document.querySelector(`#task-${idx} .action-icon`);
    // Create event listener to delete item
    iconContainer.addEventListener('mousedown', deleteAndRemoveTask);
    iconContainer.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  };
};

// Listener LEAVING FOCUS ON TASK INPUT
const taskFocusOutListener = (taskEle) => {
  // Seelect input field to focus
  const inputField = taskEle.children[1];
  inputField.addEventListener('focusout', () => {
    const idx = inputField.dataset.index;
    taskEle.style.backgroundColor = '#fff';
    // Change back icon to triple dot
    const iconContainer = document.querySelector(`#task-${idx} .action-icon`);
    iconContainer.innerHTML = tripleDotHTML;
    updateTask(taskEle);
    // Remove delete eventListenr
    iconContainer.removeEventListener('mousedown', deleteAndRemoveTask);
  });
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

const createTaskElem = (task) => {
  // create main list item
  const listItem = document.createElement('li');
  listItem.setAttribute('draggable', true);
  listItem.id = `task-${task.index}`;
  listItem.classList.add('todo-item');
  // create checkbox
  const checkBoxDiv = document.createElement('div');
  checkBoxDiv.classList.add('status-container');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.classList.add('status');
  checkBoxDiv.appendChild(checkBox);

  // create item for description
  const textItem = document.createElement('input');
  textItem.classList.add('description');
  // create container for action icon
  const iconContainer = document.createElement('div');
  iconContainer.classList.add('action-icon');
  iconContainer.innerHTML = tripleDotHTML;
  // set task value
  textItem.value = task.description;
  textItem.dataset.index = task.index;
  // append childs
  listItem.appendChild(checkBoxDiv);
  listItem.appendChild(textItem);
  listItem.appendChild(iconContainer);
  // insert triple dot icon
  return listItem;
};

// display task on DOM and ADD EVENT LISTENERS to TASK
const displayTaskElem = (task) => {
  const listItemElem = createTaskElem(task);
  todoContainerElem.appendChild(listItemElem);
  taskOnFocusListener(listItemElem);
  taskFocusOutListener(listItemElem);
};

const displayAllTasks = () => {
  getTasksFromLocalStorage();
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    displayTaskElem(task);
  });
};

const createTask = (event) => {
  const eventType = event.constructor.name;
  if (eventType === 'PointerEvent' || event.key === 'Enter') {
    TASK_ID[0] = getCurrentTaskID();
    TASK_ID[0] += 1;
    const task = {
      description: newItemElem.value,
      completed: false,
      index: TASK_ID[0],
    };
    newItemElem.value = '';
    tasks.push(task);
    saveTasksOnLocalStorage();
    displayTaskElem(task);
  }
};

export default () => {
  window.onload = displayAllTasks;
  newItemElem.onkeyup = createTask;
  addIconElem.onclick = createTask;
};
