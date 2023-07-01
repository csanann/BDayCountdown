// file: src/calculateDays.js

function calculateRemainingDays(dateOfBirth) {
  const [day, month] = dateOfBirth.split("/");
  let today = new Date();
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  let birthDate = new Date(today.getFullYear(), month - 1, day);

  if (today.getTime() > birthDate.getTime()) {
    birthDate.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = Math.abs(birthDate- today);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

module.exports = { calculateRemainingDays };