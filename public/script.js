// file: public/script.js

document.getElementById('user-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  
  fetch('/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, dob }),
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.error) {
      document.getElementById('error-message').innerText = data.error;
    } else {
      window.location = '/result';
    }
  });
});