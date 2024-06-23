// Naprevete opcija za append t.e da dodavame tekst vo fajlot namesto da go prezapisuvame toa sto veke go ima

// pr.

// Vangel Hristov
// 24
// Strumica

const fs = require('fs');

const name = "Darko Kiprijanovski";
const age = 29;
const city = "Kumanovo";

const dataToAppend = `${name}\n${age}\n${city}\n`;

//The fs.appendFile() method is used to asynchronously append the given data to a file. A new file is created if it does not exist.
fs.appendFile('file.txt', dataToAppend, (err) => {
    if (err) {
        console.log('An error occurred :', err);
    } else {
        console.log('Text appended successfully.');
    }
});