// file: tests/calculateDays.test.js

const { calculateRemainingDays } = require('../src/calculateDays');

test('Calculates remaining days until next birthday', () => {
  expect(calculateRemainingDays('Ann San', '12/05/1989')).toBe(0);
  expect(calculateRemainingDays('Ann San', '11/05/1989')).toBe(1);
  expect(calculateRemainingDays('Ann San', '13/05/1989')).toBe(365);
});