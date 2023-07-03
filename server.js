// file: server.js

const express = require('express');
const path = require('path');
const { calculateRemainingDays } = require('./src/calculateDays');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/birthday', (reg, res) => {
  try {
    const dateOfBirth = req.query.dob;
    const remainingDays = calculateRemainingDays(dateOfBirth);
    res.json({ remainingDays });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});