const fs = require('fs');
const { createTask } = require('./helpers');
const tasks = require('./data');

// window.document.body.innerHTML = fs.readFileSync('build/index.html');

// inputElem.addEventListener('click', createTask);
it('does sometjhing', () => {
  document.body.innerHTML = `
    <div id="list-wrapper">
      <ul id="list-header">
        <li id="list-title">
          <p>Today's To Do</p>
          <div id="reset-completed">
            <i id="reload-icon" class="fa-solid fa-arrows-rotate"></i>
          </div>
        </li>
        <li id="new-item">
          <input
            id="add-item"
            type="text"
            placeholder="Add to your list..."
          /><i id="add-icon" class="fa-solid fa-reply"></i>
        </li>
      </ul>
      <ul id="todo-items"></ul>
      <button id="clear-completed" type="button">Clear all completed</button>
    </div>
`;

  console.log(window.document.body);

  const newItemElem = document.getElementById('add-item');
  newItemElem.value = 'Aaron';
  const event = { constructor: { name: 'PointerEvent' } };
  createTask(event);
  expect(tasks.length).toBe(1);
});
