const fs = require('fs/promises');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'studenti.json');

async function readData() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeData(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

const getStudentForm = (req, res) => {
  res.render('student_form');
};

const postForm = async (req, res) => {
  const { ime, prezime, prosek } = req.body;
  const newStudent = { ime, prezime, prosek: Number(prosek) };

  const studenti = await readData();
  studenti.push(newStudent);
  await writeData(studenti);

  res.redirect('/studenti');
};

const getStudenti = async (req, res) => {
  const studenti = await readData();
  res.render('studenti', { studenti });
};

const getBrishi = async (req, res) => {
  const index = Number(req.query.i, 10);
  const studenti = await readData();

  if (!isNaN(index) && studenti[index]) {
    studenti.splice(index, 1);
    await writeData(studenti);
  }

  res.redirect('/studenti');
};

module.exports = { getStudentForm, postForm, getStudenti, getBrishi };