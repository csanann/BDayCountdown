// file: tests/main.test.js

const { isValidInput } = require('../src/main');

test('Validates user input', () => {
  expect(isValidInput('Ann San', '1989-05-12')).toBe(true);
  expect(isValidInput('Ann San', '1989-05-05')).toBe(true);
  expect(isValidInput('Ann San', 'random string')).toBe(false);
  expect(isValidInput(12345, '1989-05-12')).toBe(false);
  expect(isValidInput('', '1989-05-12')).toBe(false);
  expect(isValidInput('Ann San', '')).toBe(false);
});