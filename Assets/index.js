const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../Assets/utils/generateMarkdown.js")


inquirer
.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the link or relative path to your img?",
    },
    {
        type: "input",
        name: "credits",
        message: "Who or what would you like to credit?",
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a License?",
        choices: ['Apache', 'Boost','IBM', 'MIT', 'Mozilla', 'None'],
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your gitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },

]) 

.then((response) => {
    
    const readMePageContent = generateMarkdown(response);

    fs.writeFile('../Generated-README/README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md'));
});