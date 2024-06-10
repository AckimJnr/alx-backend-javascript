export default function createIteratorObject(report) {
  const { allEmployees } = report;

  function* iterateEmployees() {
    for (const department in allEmployees) {
      if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
        const employees = allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: iterateEmployees,
  };
}
