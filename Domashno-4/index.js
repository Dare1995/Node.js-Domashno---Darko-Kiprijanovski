// 1. Dopolnite so mnozenje i delenje kalkulatorot
// 2. Iskoristete gi funkciite za konverzija koi gi pravevme na casot
 
const http = require("http");

function handler(req, res) {
    const url = req.url;
    console.log("url", url);

const [, operacija, numOne, numTwo] = req.url.split("/");

let result = "";
  switch (operacija) {
    case "sobiranje":
      result = Number(numOne) + Number(numTwo);
     res.end(result.toString());
      break;
    case "razlika":
      result = Number(numOne) - Number(numTwo);
      res.end(result.toString());
      break;
    case "mnozenje":
     result = Number(numOne) * Number (numTwo);
    res.end(result.toString());
    case "delenje":
     result = Number(numOne) / Number (numTwo);
    res.end(result.toString());
    default:
      res.end("Welcome to calculator app!");
  }
}

const newServer = http.createServer(handler);
newServer.listen(10000, () => {
  console.log("Server is listening on port 10000");
});



