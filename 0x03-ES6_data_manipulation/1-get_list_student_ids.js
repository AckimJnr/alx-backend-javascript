export default function getStudentIds(students) {
  if (!Array.isArray(students)) {
    throw new Error('Invalid argument. Expected an array.');
  }

  return students.map((student) => student.id);
}
