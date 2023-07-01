// file: tests/calculateDays.test.js

const MockDate = require('mockdate');
const { calculateRemainingDays } = require('../src/calculateDays');

test('Calculates remaining days until next birthday', () => {
  MockDate.set('2023-05-12');
  expect(calculateRemainingDays('12/05/1989')).toBe(0);
  MockDate.set('2023-05-11');
  expect(calculateRemainingDays('12/05/1989')).toBe(1);
  MockDate.set('2023-05-13');
  expect(calculateRemainingDays('12/05/1989')).toBe(365);
});

afterEach(() => {
  MockDate.reset();
});