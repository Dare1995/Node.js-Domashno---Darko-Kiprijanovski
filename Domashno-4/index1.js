//  Pr. url : /milestokm/10
//  Pr. url : /celsiustofahr/10

const http = require("http");
const {
    convertMilesToKm,
    convertCelsiusToFahrenheit,
    convertPoundsToKg,
    convertFeetToMeters,
} = require('./conversion.js');

        function handler(req, res) {
        const url = req.url;
        console.log("url", url);
    
        const [, operacija, num] = req.url.split("/");
    
        //The parseFloat() function parses a string argument and returns a floating point number
        let result = "";
        switch (operacija) {
            case "milestokm":
                result = convertMilesToKm(parseFloat(num));
                res.end(`${result}`);
                break;
            case "celsiusToFahrenheit":
                result = convertCelsiusToFahrenheit(parseFloat(num));
                res.end(`${result}`);
                break;
            case "poundstokg":
                result = convertPoundsToKg(parseFloat(num));
                res.end(`${result}`);
                break;
            case "feettometers":
                result = convertFeetToMeters(parseFloat(num));
                res.end(`${result}`);
                break;
            default:
                res.end("Welcome to conversion app!");
        }
    }
    
    const newServer = http.createServer(handler);
    newServer.listen(10000, () => {
        console.log("Server is listening on port 10000");
    });

