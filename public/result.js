// file: public/result.js

const name = localStorage.getItem('name');
const dob = localStorage.getItem('dob');

fetch(`/calculate?dob=${dob}`)
.then(response => response.json())
.then(data => {
  if (data.error) {
    document.getElementById('greeting').textContent = `Error: ${data.error}`;
  } else {
    document.getElementById('greeting').textContent = `Hello, ${name}!`;
    document.getElementById('countdown').textContent = `Remaining days until your birthday: ${data.remainingDays}`;
  }
});