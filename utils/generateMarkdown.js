// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application
  # Usage 
  In order to run this app, ${data.Usage}
  # License
  ${data.License} is the license used to run this app
  # Contribution
  Contributors: ${data.Contribution}
  # Tests
  The following is needed to run the test: ${data.Tests}
  # Questions
  For any comments questions or concerns feel free to contact ${data.Questions}
`;
}

module.exports = generateMarkdown;