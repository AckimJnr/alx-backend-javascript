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
var teacher = new TeacherClass('John', 'Doe', false, 'London', { contract: false });
console.log(teacher);
