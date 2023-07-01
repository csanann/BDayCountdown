// file: src/main.js

function isValidInput(name, dob) {
  if (typeof name !== 'string' || name.trim() === '' || !/^(\d{2})\/(\d{2})\/(\d{4})$/.test(dob)) {
      return false;
  }

  return true;
}

module.exports = { isValidInput };
