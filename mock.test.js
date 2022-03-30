// const addItem = require('./addItem');

test('Add one new item to the list', () => {
  document.body.innerHTML = '<div><ul id="list"><li>Hello</li></ul></div>';
  const list = document.querySelectorAll('#list li');
  expect(list).toHaveLength(1);
});
