// Manager class - extends Employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // call super
        super(name, id, email);
        this.officeNumber = officeNumber;
        // Manager role is "Manager"
        this.role = "Manager";
    }

    // return Manager office Number
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;