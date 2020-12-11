const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];
// const idArray = [];

// function for ask user for manager info
function askUserforManagerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: `Enter manager's name.`,
            name: `mgrName`,
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: 'input',
            message: "Enter manager's ID",
            name: "mgrId"
        },
        {
            type: 'input',
            message: `Enter manager email.`,
            name: `mgrEmail`
        },
        {
            type: 'input',
            message: "Enter manager office number.",
            name: "officeNum"
        }
    ]).then((response) => {
        //create manager
        const newManager = new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.officeNum);
        employeeList.push(newManager);
        askForEmployeeType();
    }); 
}

// function for ask for next employee type
function askForEmployeeType(){
    return inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Choose next employee type",
            choices: ["Engineer", "Intern", "No more employees"]

        }
    ]).then((results) =>{
        console.log(results);
        switch (results.nextEmployee) {
            case "Engineer":
            console.log("You chose engineer!");
            askUserForEngineerInfo();
            break;

            case "Intern":
            console.log("you chose intern!")
            askUserForInternInfo();
            break;

            case "No more employees":
            console.log("No more employees done.");
            console.log(employeeList);
            // print html page with employee list

        }
    })

}

// function for ask user for engineer info
function askUserForEngineerInfo(){
    return inquirer.prompt([
        {
            name: `engineerName`,
            type: 'input',
            message: `Enter Engineer's name.`,
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            name: "engineerId",
            type: 'input',
            message: "Enter Engineer's ID"
        },
        {
            name: `engineerEmail`,
            type: 'input',
            message: `Enter Engineer's email.`
        },
        {
            name: "github",
            type: 'input',
            message: "Enter Engineer's github."
        }
    ]).then((response) => {
        //create Engineer
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
        employeeList.push(newEngineer);
        askForEmployeeType();
    }); 

}

// function for ask user for intern info
function askUserForInternInfo(){
    return inquirer.prompt([
        {
            name: `internName`,
            type: 'input',
            message: `Enter Intern's name.`,
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            name: "internId",
            type: 'input',
            message: "Enter Intern's ID"
        },
        {
            name: `internEmail`,
            type: 'input',
            message: `Enter Intern's email.`
        },
        {
            name: "school",
            type: 'input',
            message: "Enter Intern's School."
        }
    ]).then((response) => {
        //create Intern
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        employeeList.push(newIntern);
        askForEmployeeType();
    }); 
}

function appMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt(managerQuestions)
        //
    }
}

// ask user for manager info

// prompt user for next employee type (engineer, intern) or no more employees

// ask user for engineer info

// ask user for intern info



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init(){
    askUserforManagerInfo();
    // let empList = [];
    // let emp1 = new Manager("Sal", 1234, "sal@mail.com", 4444);
    // empList.push(emp1);
    // console.log(empList);
    // render(empList);

}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

init();