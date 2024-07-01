// - За било кој од изразите искористете го во некоја рута

const http = require("http");
const url = require("url");

const {
    welcome,
    userEmailLogin,
    invalidUserEmail,
} = require("./handler/handler");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/welcome") {
        welcome(req, res);
     } else if (parsedUrl.pathname === "/login") {
        userEmailLogin(req, res, parsedUrl.query.email);
      } else {
        invalidUserEmail(req, res);
      }
});

server.listen(3000, () => {
    console.log("Server started at port 3000!");
});
