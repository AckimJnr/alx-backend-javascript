const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');

        const nonEmptyLines = lines.filter((line) => line.trim() !== '');

        const students = nonEmptyLines.map((line) => line.split(','));

        const fields = {};
        students.forEach((student) => {
          const field = student[3];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]);
        });

        console.log('Number of students:', nonEmptyLines.length);
        for (const field in fields) {
          if (Object.prototype.hasOwnProperty.call(fields, field)) {
            const studentCount = fields[field].length;
            const studentList = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
