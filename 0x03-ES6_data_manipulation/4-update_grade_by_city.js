export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList.map((student) => {
    if (student.city === city) {
      return { ...student, grade: newGrade };
    }
    return student;
  });
}
