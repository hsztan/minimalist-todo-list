import './style.css';

// Dom items
const todoContainer = document.getElementById('todo-items');

const tasks = [
  {
    description: 'take the dog to the vet',
    completed: false,
    index: 1,
  },
  {
    description: 'make todo list',
    completed: false,
    index: 2,
  },
  {
    description: 'shred top secret docs',
    completed: false,
    index: 3,
  },
  {
    description: 'drink more coffee',
    completed: false,
    index: 4,
  },
];

const tripleDotHTML = `
  <div id="triple-dot">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
`;

window.onload = () => {
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
    todoContainer.appendChild(listItem);
  });
};
