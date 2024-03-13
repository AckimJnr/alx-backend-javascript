var TeacherClass = /** @class */ (function () {
    function TeacherClass(firstName, lastName, fullTimeEmployee, location, additionalData) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        Object.assign(this, additionalData);
    }
    return TeacherClass;
}());
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var teacher = new TeacherClass('John', 'Doe', false, 'London', { contract: false });
console.log(teacher);
