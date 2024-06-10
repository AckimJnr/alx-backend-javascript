export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.map((student) => {
    if (student.location === city) {
      const updatedGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      if (updatedGrade !== undefined) {
        return { ...student, grade: updatedGrade.grade };
      }
      return { ...student, grade: 'N/A' };
    }
    return student;
  }).filter((student) => student.location === city);
}
