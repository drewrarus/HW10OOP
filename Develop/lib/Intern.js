// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

class Intern extends Employee{
    constructor(name, email, id, school,){
    super(name,email, id, school)
    this.school = school;
    }
getName(){ return this.name}

getEmail(){ return this.email}

getId(){ return this.id}
getSchool(){
    return this.school
}
getRole(){
    return 'Intern'
}
}
module.exports = Intern