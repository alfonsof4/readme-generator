// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generatorMarkdown = require('./util/generateMarkdown')

// TODO: Create an array of questions for user input
const userQuestions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project',
},
{
    type: 'input',
    name: 'Description',
    message: 'Provided a detailed paragraph providing a description of the project',
},
{
    type: 'input',
    name: 'Table of Contents',
    message: 'Table of contents',
},
{
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install to run this app? (ie dependenies like node, inquirer, etc...)',
},
{
    type: 'input',
    name: 'Usage',
    message: 'Please provide instructions on how this app will be used',
},
{
    type: 'checkbox',
    name: 'License',
    message: 'What kind of liscense is used for this app?',
    choices: ['Apache License 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'MIT license', 'Mozilla Public License 2.0']
},
{
    type: 'input',
    name: 'Contribution',
    message: 'Who were the contributors to the project?',
},
{
    type: 'input',
    name: 'Tests',
    message: 'What commands are used to test app?',
},
{
    type: 'input',
    name: 'Questions',
    message: 'Please enter contact information incase there are any questions',
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }   else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));

        })
}

// Function call to initialize app
init();


