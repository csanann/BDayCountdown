// file: public/script.js

document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  if (!name || dob) {
    document.getElementById('error-message').textContent = 'Please fill out both fields.';
    return;
  }

  if (!/^\d{2}\/d{2}\/\d{4}$/.test(dob)) {
    document.getElementById('error-message').textContent = 'Please enter a valid date in the format dd/mm/yyyy';
    return;
  }

  localStorage.setItem('name', name);
  localStorage.setItem('dob', dob);

  window.localStorage.href = 'result.html';
});