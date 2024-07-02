function welcome(req, res) {
  res.end("Hello, please type in your email.");
}

function userEmailLogin(req, res, email) {
  const userEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (userEmailPattern.test(email)) {
      res.end("Success, now you are logged in.");
  } else {
      res.end("Invalid Email!");
  }
}

function invalidUserEmail(req, res) {
  res.end("404 Not Found");
}

module.exports = {
  welcome,
  userEmailLogin,
  invalidUserEmail,
};