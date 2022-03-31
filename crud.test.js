const fs = require('fs');
const {
  createTask,
  tasks,
  deleteAndRemoveTask,
  updateTask,
  changeTaskStatus,
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

describe('updateTask', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  beforeEach(() => {
    // create task
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Henry';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
    // update Task
    const todoElement = document.querySelector('.todo-item');
    const expectedValue = 'You are cool';
    todoElement.children[1].value = expectedValue;
    updateTask(todoElement);
  });
  afterEach(() => {
    const e = { target: document.getElementById('triple-dot') };
    deleteAndRemoveTask(e);
  })
  it('Updated DOM input value is stored in the data array', () => {
    const expectedValue = 'You are cool';
    expect(tasks.at(0).description).toBe(expectedValue);
  });
  it('Value is updated with a new value', () => {
    const inputElement = document.querySelector('.description');
    expect(tasks.at(0).description).toBe(inputElement.value);
  });
  it('Local Storage has updated value', () => {
    const expectedValue = 'You are cool';
    const tasksFromStorage = JSON.parse(localStorage.getItem('todo-tasks'));
    const updatedValue = tasksFromStorage[0].description;
    expect(updatedValue).toBe(expectedValue);
  });
});

describe('changeTaskStatus', () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync('build/index.html');
  });
  beforeEach(() => {
    // create task
    const newItemElem = document.getElementById('add-item');
    newItemElem.value = 'Laundry';
    const event = { constructor: { name: 'PointerEvent' } };
    createTask(event);
    // update Task
    const todoElement = document.querySelector('.todo-item');
    const e = { target: todoElement.children[0] };
    changeTaskStatus(e);
  });
  afterEach(() => {
    const e = { target: document.getElementById('triple-dot') };
    deleteAndRemoveTask(e);
  })
  it('Task completion value is toggled in local memory', () => {
    expect(tasks.at(0).completed).toBe(true);
  });
  it('Task completion value is toggled in local storage', () => {
    const tasksFromStorage = JSON.parse(localStorage.getItem('todo-tasks'));
    const completion = tasksFromStorage[0].completed;
    expect(completion).toBe(true);
  });
  it('Task toggles completion back to false in memory when ran again', () => {
    // update Task to not completed
    const todoElement = document.querySelector('.todo-item');
    const e = { target: todoElement.children[0] };
    changeTaskStatus(e);
    expect(tasks.at(0).completed).toBe(false);
  });
  it('Task toggles completion back to false in local Storage when ran again', () => {
    // update Task to not completed
    const todoElement = document.querySelector('.todo-item');
    const e = { target: todoElement.children[0] };
    changeTaskStatus(e);
    const tasksFromStorage = JSON.parse(localStorage.getItem('todo-tasks'));
    const completion = tasksFromStorage[0].completed;
    expect(completion).toBe(false);
  });
});

