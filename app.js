// app.js - create employee summary
// dependencies
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

// askUserforManagerInfo() - ask user for manager info and create Manager
// each team has one Manager
function askUserforManagerInfo() {
    return inquirer.prompt([
        {
            type: 'input',
            message: `Enter manager's name: `,
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
            message: "Enter manager's ID: ",
            name: "mgrId"
        },
        {
            type: 'input',
            message: `Enter manager email: `,
            name: `mgrEmail`
        },
        {
            type: 'input',
            message: "Enter manager office number: ",
            name: "officeNum"
        }
    ]).then((response) => {
        //create Manager
        const newManager = new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.officeNum);
        employeeList.push(newManager);
        askForNextEmployee();
    }); 
}

// askForNextEmployee() - ask user for next employee type (Intern, Engineer) or no more employees
function askForNextEmployee(){
    return inquirer.prompt([
        {
            type: "list",
            name: "nextEmployee",
            message: "Choose next employee type or No more employees.",
            choices: ["Engineer", "Intern", "No more employees"]

        }
    ]).then((results) =>{
        printLine();
        switch (results.nextEmployee) {
            case "Engineer":
                askUserForEngineerInfo();
                break;

            case "Intern":
                askUserForInternInfo();
                break;

            case "No more employees":
                createHMTLFile();
        }
    })
}

// askUserForEngineerInfo() - ask user for engineer info and create Engineer
function askUserForEngineerInfo(){
    return inquirer.prompt([
        {
            name: `engineerName`,
            type: 'input',
            message: `Enter Engineer's name: `,
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
            message: "Enter Engineer's ID: "
        },
        {
            name: `engineerEmail`,
            type: 'input',
            message: `Enter Engineer's email: `
        },
        {
            name: "github",
            type: 'input',
            message: "Enter Engineer's github: "
        }
    ]).then((response) => {
        //create Engineer
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github);
        employeeList.push(newEngineer);
        askForNextEmployee();
    }); 

}

// askUserForInternInfo() - ask user for intern info and create Intern
function askUserForInternInfo(){
    return inquirer.prompt([
        {
            name: `internName`,
            type: 'input',
            message: `Enter Intern's name: `,
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
            message: "Enter Intern's ID: "
        },
        {
            name: `internEmail`,
            type: 'input',
            message: `Enter Intern's email:`
        },
        {
            name: "school",
            type: 'input',
            message: "Enter Intern's School: "
        }
    ]).then((response) => {
        //create Intern
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.school);
        employeeList.push(newIntern);
        askForNextEmployee();
    }); 
}

// createHTMLFile() - generate HTML file based on list of employees
function createHMTLFile() {
    let htmlString = render(employeeList);
    fs.writeFile(outputPath, htmlString, (err) =>{
        if( err ) throw err;
        console.log(`HTML file generated to path ${OUTPUT_DIR}.`);
    });
}

// printLine() - create line to separate print outs
function printLine () {
    console.log("-----------------------------------");
}

// init() - display welcome and call askUserforManagerInfo()
function init(){
    printLine();
    console.log("Wecome to Employee Summary creator!");
    printLine();
    askUserforManagerInfo();
}

// start program
init();