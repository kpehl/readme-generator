// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${ data.title } ![license badge - ${ data.license }](https://img.shields.io/badge/license-${ data.license }-brightgreen)
  ## Description
  ${ data.description }
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${ data.installation }
  ## Usage
  ${ data.usage }
  ## License
  This project uses a ${ data.license } license.
  ## Contributing
  ${ data.contributing}
  ## Tests
  ${ data.tests }
  ## Questions
  ${ data.questions }
`;
};

module.exports = generateMarkdown;
