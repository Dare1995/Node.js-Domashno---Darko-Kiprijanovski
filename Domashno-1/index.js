const students = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [59, 63, 70] },
    { name: "Charlie", scores: [100, 95, 98] },
    { name: "David", scores: [45, 52, 60] },
    { name: "Eve", scores: [75, 80, 82] }
  ];
  
  function calculateGrades(students) {
    const results = [];
  
    students.forEach(student => {
      const studentScore = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
      
      let grade;
  
      if (studentScore >= 90) {
        grade = 'A';
      } else if (studentScore >= 80) {
        grade = 'B';
      } else if (studentScore >= 70) {
        grade = 'C';
      } else if (studentScore >= 60) {
        grade = 'D';
      } else {
        grade = 'F';
      }
  
      results.push({name:student.name,grade:grade});
    });
  
    return results;
  }
  
  console.log(calculateGrades(students));