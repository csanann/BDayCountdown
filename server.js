// file: server.js

const express = require('express');
const cors = require('cors');
const path = require('path');
const { calculateRemainingDays } = require('./src/calculateDays');
const { isValidInput } = require('./src/main');

const app = express();
const port = 3000();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/calculate', (req, res) => {
  const { name, dob } = req.body;

  if (!isValidInput(name, dob)) {
    res.status(400).json({ error: 'Invalid input' });
    return;
  }

  try {
    const remainingDays = calculateRemainingDays(dob);
    res.json({ remainingDays });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.get('/result', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'result.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//since this is a simple app, we hence have to set routes here