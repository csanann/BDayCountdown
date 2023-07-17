// file: src/main.js

function isValidInput(name, dob) {
  // if (typeof name !== 'string' || name.trim() === '' || !/^(\d{2})\/(\d{2})\/(\d{4})$/.test(dob)) {
  if (typeof name !== 'string' || name.trim() === '') {  
    return false;
  }

  const dateParts = dob.split('-');
  if (dateParts.length !== 3) {
    return false;
  }

  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const date = new Date(year, month -1, day);
  if (!(date && date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day)) {
    return false;
  }

  return true;
}

module.exports = { isValidInput };
