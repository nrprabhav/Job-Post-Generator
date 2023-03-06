const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const teamMembers = [];
const idList = [];

const appMenu = () => {
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: 'engineerName',
                message: "What is the team engineer's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                name: 'engineerId',
                message: "What is the team engineer's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
            type: "input",
                name: 'engineerEmail',
                message: "What is the team engineer's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                    name: 'engineerGithub',
                    message: "What is the team engineer's Git Hub?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        } 
                        return "Please enter atleast one character.";
                    }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                console.log(engineer);
                teamMembers.push(engineer);
                idList.push(answers.engineerId);
                createTeam();
            })
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: 'internName',
                message: "What is the team intern's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                name: 'internId',
                message: "What is the team intern's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
            type: "input",
                name: 'internEmail',
                message: "What is the team intern's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                    name: 'internSchool',
                    message: "What is the team intern's school?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        } 
                        return "Please enter atleast one character.";
                    }
                }
            ]).then(answers => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                console.log(intern);
                teamMembers.push(intern);
                idList.push(answers.internId);
                createTeam();
            })
    }

    function buildTeam() {

    }

    function createTeam() {
        inquirer.prompt([
            {
                type:"list",
                name:"memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            if(userChoice.memberChoice === "Engineer") {
                //Add Engineer
                addEngineer();
            } else if(userChoice.memberChoice === "Intern") {
                //Add Intern
                addIntern()
            } else {
                // Build team function
                buildTeam();
            }
        })
    }

    function createManager() {
        console.log("Please build your team!");
        inquirer.prompt([
            {
                type: "input",
                name: 'managerName',
                message: "What is the team manager's name?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                name: 'managerId',
                message: "What is the team manager's ID?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
            type: "input",
                name: 'managerEmail',
                message: "What is the team manager's email?",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    } 
                    return "Please enter atleast one character.";
                }
            },
            {
                type: "input",
                    name: 'managerOfficeNumber',
                    message: "What is the team manager's office number?",
                    validate: answer => {
                        if(answer !== "") {
                            return true;
                        } 
                        return "Please enter atleast one character.";
                    }
                }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            console.log(manager);
            teamMembers.push(manager);
            idList.push(answers.managerId);
            createTeam();
        })
    }

    createManager();
}

appMenu();