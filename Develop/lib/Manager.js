// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee")

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
    super(name, email, id, officeNumber)
    this.officeNumber = officeNumber;
}
getName(){
    return this.name
}
getEmail(){return this.email}
getId(){return this.id}
getOfficeNumber(){return this.officeNumber}
getRole(){
    return "Manager"
}
}
module.exports = Manager
