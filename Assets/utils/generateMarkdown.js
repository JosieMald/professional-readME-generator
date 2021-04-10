

 const renderLicenseBadge = (license) => {
  return `![license](https://img.shields.io/badge/license-${license}-green)`
}

// License links
const  renderLicenseLink = (license) => {
  if ( license == 'Apache') {
     let link = `https://opensource.org/licenses/Apache-2.0`;
     console.log(link);
 } else if ( license == 'Boost' ) {
     let link = `https://www.boost.org/LICENSE_1_0.txt`;
     console.log(link);
 } else if ( license == 'IBM' ) {
     let link = `https://opensource.org/licenses/IPL-1.0`;
     console.log(link);
 } else if ( license == 'MIT' ) {
     let link = `https://opensource.org/licenses/MIT`;
     console.log(link);
 } else if ( license == 'Mozilla' ) {
     let link = `https://opensource.org/licenses/MPL-2.0`;
     console.log(link);
 } else ( license == 'None' ); {
      return ` `;
    // console.log(link);
 }
};

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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink.license,
};
