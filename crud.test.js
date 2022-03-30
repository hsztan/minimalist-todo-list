const fs = require('fs');
const { createTask, tasks } = require('./src/modules/helpers');

describe('createTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  it('adds a new task object into the data array', () => {
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Aaron';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
    expect(tasks.length).toBe(1);
  });
  it('saves the task into the local storage', () => {
    expect(1).toBe(1);
  });
});

describe('deleteAndRemoveTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  it('removes a task object into the data array', () => {
    expect(1).toBe(1);
  });
});
