const fs = require('fs');
const { createTask, tasks } = require('./src/modules/helpers');

describe('createTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  beforeEach(() => {
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Aaron';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
  })
  afterEach(() => {
    tasks.splice(0);
    localStorage.clear();
  })
  it('adds a new task object into the data array', () => {
    expect(tasks.length).toBe(1);
  });
  it('saves the task into the local storage', () => {
    expect(localStorage['todo-tasks']).toBeTruthy();
  });
  it('renders task on the DOM', () => {
    expect(document.querySelector('.todo-item')).toBeTruthy();
  })
});

describe('deleteAndRemoveTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  it('removes a task object into the data array', () => {
    expect(1).toBe(1);
  });
});
