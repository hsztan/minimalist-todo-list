const fs = require('fs');
const {
  createTask,
  tasks,
  deleteAndRemoveTask,
} = require('./src/modules/helpers');

describe('createTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  beforeEach(() => {
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Aaron';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
  });
  afterEach(() => {
    tasks.splice(0);
    localStorage.clear();
  });
  it('adds a new task object into the data array', () => {
    expect(tasks.length).toBe(1);
  });
  it('saves the task into the local storage', () => {
    expect(localStorage['todo-tasks']).toBeTruthy();
  });
  it('renders task on the DOM', () => {
    expect(document.querySelector('.todo-item')).toBeTruthy();
  });
});

describe('deleteAndRemoveTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  beforeEach(() => {
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Aaron';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
    const e = { target: document.getElementById('triple-dot') };
    deleteAndRemoveTask(e);
  });
  it('removes a task object out of the data array', () => {
    expect(tasks.length).toBe(0);
  });
  it('checks to see if the added todo item is removed from local storage', () => {
    expect(localStorage['todo-tasks']).toBe('[]');
  });
  it('checks to see if the added toto task was removed from the dom', () => {
    expect(document.querySelector('.todo-item')).toBeFalsy();
  });
});
