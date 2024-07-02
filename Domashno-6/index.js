const express = require('express');
const { welcome, userEmailLogin, invalidUserEmail } = require('./handlers/handler');
const app = express();

app.get('/welcome', welcome);

app.get('/login', (req, res) => {
  const email = req.query.email;
  if (email) {
    userEmailLogin(req, res, email);
  } else {
    invalidUserEmail(req, res);
  }
});

app.use((req, res) => {
  invalidUserEmail(req, res);
});

app.listen(3000, () => console.log("Server started at port 3000!"));

