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

window.onload = () => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.insertAdjacentText('beforeend', task.description);
    todoContainer.appendChild(listItem);
  });
};
