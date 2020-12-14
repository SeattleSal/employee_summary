// Intern class extends Employee class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        // Intern role is "Intern"
        this.role = "Intern";
        this.school = school;
    }

    // return Intern's school
    getSchool() {
        return this.school;
    }

}

module.exports = Intern;

