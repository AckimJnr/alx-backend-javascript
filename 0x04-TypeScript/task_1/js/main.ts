interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class TeacherClass implements Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;

    constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, additionalData:{[key: string]:any}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        Object.assign(this, additionalData);
    }
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
const teacher = new TeacherClass('John', 'Doe', false, 'London', { contract: false });
console.log(teacher);
