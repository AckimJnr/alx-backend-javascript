const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    // Remove empty lines
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');

    // Parse CSV data
    const students = nonEmptyLines.map((line) => line.split(','));

    // Count students in each field
    const fields = {};
    students.forEach((student) => {
      const field = student[3]; // Assuming the field is always at index 3
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]); // Assuming the first column contains first names
    });

    console.log('Number of students:', nonEmptyLines.length - 1);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentCount = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
