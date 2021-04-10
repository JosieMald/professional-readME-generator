

 renderLicenseBadge = (response) => {
  return `![license](https://img.shields.io/badge/license-${response.license}-green)`
}

// License links
const  renderLicenseLink = (response) => {
  if ( response.license == 'Apache') {
     return `https://opensource.org/licenses/Apache-2.0`;
 } else if ( response.license == 'Boost' ) {
     return `https://www.boost.org/LICENSE_1_0.txt`;
 } else if ( response.license == 'IBM' ) {
     return `https://opensource.org/licenses/IPL-1.0`;
 } else if ( response.license == 'MIT' ) {
     return `https://opensource.org/licenses/MIT`;
 } else if ( response.license == 'Mozilla' ) {
     return `https://opensource.org/licenses/MPL-2.0`;
 } else  if ( response.license == 'None' ) {
      return ` `;
 }
};

const generateMarkdown = (response) =>
`
# ${response.projectTitle} 

${renderLicenseBadge(response)}

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

${renderLicenseLink(response)}

`

module.exports = generateMarkdown;
