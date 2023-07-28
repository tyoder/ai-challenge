// Create an Express server on port 3000
// that responds to GET requests to /pilot
// with the JSON object { pilot: 'Pete Mitchell' }.
// Use the response.json method to send the JSON object.

const express = require('express');
const app = express();

app.get('/pilot', (req, res) => {
  res.json({ pilot: 'Pete Mitchell' });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
