// Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    // return Employee name
    getName() {
        return this.name;
    }

    // return Employee id
    getId() {
        return this.id;
    }
    
    // return Employee email
    getEmail() {
        return this.email;
    }
    
    // return Employee role "Employee"
    getRole() {
        return this.role;
    }
}

module.exports = Employee