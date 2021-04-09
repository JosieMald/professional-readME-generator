const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (response) =>
`
# ${response.projectTitle} ${response.choices}

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

${response.license}

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
        choices: ['Apache', 'Boost','Eclipse','IBM', 'ISC', 'MIT', 'Mozilla'],
    },

]) 

.then((response) => {
    if ( response.choices == 'Apache') {
        response.choices = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
        response.license = "https://opensource.org/licenses/Apache-2.0";
    };
    if ( response.choices == 'Boost') {
        response.choices = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]";
        response.license = "https://www.boost.org/LICENSE_1_0.txt";
    };
    if ( response.choices == 'IBM') {
        response.choices = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
        response.license = "https://opensource.org/licenses/IPL-1.0";
    };
    if ( response.choices == 'MIT') {
        response.choices = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        response.license = "https://opensource.org/licenses/MIT";
    };
    if ( response.choices == 'Mozilla') {
        response.choices = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
        response.license = "https://opensource.org/licenses/MPL-2.0";
    };
    const readMePageContent = generateReadMe(response);

    fs.writeFile('README.md', readMePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md'));
});