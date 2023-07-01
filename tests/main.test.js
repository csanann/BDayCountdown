// file: tests/main.test.js

const { isValidInput } = require('../src/main');

test('Validates user input', () => {
  expect(isValidInput('Ann San', '12/05/1989')).toBe(true);
  expect(isValidInput('Ann San', '05/05/1989')).toBe(true);
  expect(isValidInput('Ann San', 'random string')).toBe(false);
  expect(isValidInput(12345, '12/05/1989')).toBe(false);
  expect(isValidInput('', '12/05/1989')).toBe(false);
  expect(isValidInput('Ann San', '')).toBe(false);
});