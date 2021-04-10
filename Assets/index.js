const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("../Assets/utils/generateMarkdown.js")

const generateReadMe = (response) =>
`
# ${response.projectTitle} ${generateMarkdown.renderLicenseBadge}

## Description


${response.motivation}
${response.projectBuild}
${response.problemSolve}
${response.learned}


## Table of Contents

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)

## Installation

${response.installation}

## Usage

${response.usage}


![alt text](${response.usage})


## Credits

${response.credits}

## License

${generateMarkdown.renderLicenseLink}

`
inquirer
.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for this project?",
    },
    {
        type: "input",
        name: "projectBuild",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "problemSolve",
        message: "What problem does it solve?",
    },
    {
        type: "input",
        name: "learned",
        message: "What did you learn?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the path or url to your img?",
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

]) 

.then((response) => {
    
    const readMePageContent = generateReadMe(response);

    fs.writeFile('../Generated-README/README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md'));
});