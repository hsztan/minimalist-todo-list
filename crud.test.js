const fs = require('fs');
const { createTask } = require('./src/modules/helpers');
const tasks = require('./src/modules/data');

document.body.innerHTML = fs.readFileSync('build/index.html');

// inputElem.addEventListener('click', createTask);
it('does something', () => {
  const newItemElem = document.getElementById('add-item');
  newItemElem.value = 'Aaron';
  const event = { constructor: { name: 'PointerEvent' } };
  // createTask(event);
  expect(document.querySelector('.fa-reply').id).toBe('add-icon');
});
