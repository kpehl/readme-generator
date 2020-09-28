const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('README.md file created!')
        }
    })
};

// function to initialize program
function init() {
    return inquirer
        .prompt(questions)
        .then(readmeData => {
            return writeToFile('README2.md',readmeData)
        })
        .catch(err => {
            console.log(err);
        })
};

// function call to initialize program
init();
