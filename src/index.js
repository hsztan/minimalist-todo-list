import './style.css';
import tasks from './modules/data';

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

const displayAll = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
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
    todoContainerElem.appendChild(listItem);
  });
};

const addTask = (e) => {
  if (e.key === 'Enter') {
    console.log('pressed');
  }
};

window.onload = displayAll;
newItemElem.onkeyup = addTask;
