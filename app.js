const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// reminder that this is a GET route that sends the code to the browser
// when the user is trying to gain access to the home route
app.get('/', (req, res) => {
  res.send('Hello');
});

// listening to port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
