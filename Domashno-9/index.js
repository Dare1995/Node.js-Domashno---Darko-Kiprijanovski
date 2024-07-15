const express = require('express');
const path = require('path');
const { getStudentForm, postForm, getStudenti, getBrishi } = require('./handlers/controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


app.get('/form', getStudentForm);
app.post('/form', postForm);
app.get('/studenti', getStudenti);
app.get('/brishi', getBrishi);



app.listen(3000, () => console.log("Server started at port 3000"));