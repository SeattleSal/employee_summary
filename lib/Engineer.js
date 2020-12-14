// Engineer class - extends Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        // Engineer role is "Engineer"
        this.role = "Engineer";
    }

    // return Engineer github
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;