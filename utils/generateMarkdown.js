// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${ data.title }
  ## Description
  ${ data.description }
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation {#installation}
  ${ data.installation }
  ## Usage {#usage}
  ${ data.usage }
  ## License {#license}
  ${ data.license }
  ## Contributing {#contributing}
  ${ data.contributing}
  ## Tests {#tests}
  ${ data.tests }
  ## Questions {#questions}
  ${ data.questions }
`;
};

module.exports = generateMarkdown;
