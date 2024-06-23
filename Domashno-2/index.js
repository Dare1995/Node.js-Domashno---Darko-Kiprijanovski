// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
const studentsSkopje = studenti
  .filter(student => student.grad === "Skopje" && student.ime.endsWith("a") && student.prosek > 7)
  .sort((a, b) => a.ime.localeCompare(b.ime));

// console.log(studentsSkopje)



// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
const averageScoreNine = studenti
  .filter(student => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);

// console.log(averageScoreNine)



// Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
const firstThreeStudents = studenti
  .filter(student => student.ime.length === 5)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3);

// console.log(firstThreeStudents) // opagjachki redosled



// 4. Градови подредени по групна висина на просек.
const grupenProsek = studenti.reduce((acc, student) => {
  let grad = acc.find(item => item.grad === student.grad);
  if (grad) {
    grad.sum += student.prosek;
    grad.num++;
  } else {
    acc.push({ grad: student.grad, sum: student.prosek, num: 1 });
  }
  return acc;
}, []);

const podredeniGradovi = grupenProsek
  .map(({ grad, sum, num }) => ({ grad, prosek: sum / num }))
  .sort((a, b) => b.prosek - a.prosek);

// podredeniGradovi.forEach(({ grad, prosek }) => {
//   console.log(`Град: ${grad}, Просек: ${prosek.toFixed(2)}`);
// });


// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
// let sumA = 0;
// let countA = 0;
// let sumOthers = 0;
// let countOthers = 0;

// studenti.forEach(student => {
//   if (student.ime.endsWith("a")) {
//     sumA += student.prosek;
//     countA++;
//   } else {
//     sumOthers += student.prosek;
//     countOthers++;
//   }
// });

// const averageScoreWithA = countA > 0 ? sumA / countA : 0;
// const averageScoreOthers = countOthers > 0 ? sumOthers / countOthers : 0;

// console.log("Вкупен просек за студенти чие име завршува на 'a':", averageScoreWithA);
// console.log("Вкупен просек за сите други студенти:", averageScoreOthers.toFixed(2));

const calculateAverage = students => {
  const totalProsek = students.reduce((sum, student) => sum + student.prosek, 0);
  return totalProsek / students.length;
};

const endsWithA = studenti.filter(student => student.ime.endsWith('a'));

const doesNotEndWithA = studenti.filter(student => !student.ime.endsWith('a'));

const averageScoreWithA = calculateAverage(endsWithA);
const averageScoreOthers = calculateAverage(doesNotEndWithA);

console.log(`Average grade of students whose names end with 'a': ${averageScoreWithA}`);
console.log(`Average grade of students whose names do not end with 'a': ${averageScoreOthers.toFixed(2)}`);

