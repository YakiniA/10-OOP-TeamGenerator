const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

 function init() {
  // try{
  //   const { data } = await
    return inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your Manager name?",
        validate: answerValidation
      },
      {
        type: "input",
        message: "What is your Manager Id?",
        name: "managerId",
        validate: answerValidation
      },
      {
        type: "input",
        message: "What is your Manager's email?",
        name: "managerEmail",
        validate: answerValidation
      },
      {
        type: "input",
        message: "What is your Manager's office number?",
        name: "managerNo",
        validate: answerValidation
      }
    ])}
      
    inquirer.prompt(teamType)
        {
       
        type: "input",
        message: "Which type of team you would like to add?",
        name: "typeInfo",
       validate : questions
      }

  .then((response) => {
     console.log(response);
     var i=0;
     if(i < 3){
        return prompt()

        i++;
     }
  
  })
  .catch(function(err) {
    console.log(err);
  });

       
       
     async function questions(value){
    
        let quesEngineer;
        let quesIntern;

           switch(value){
            case 'Engineer':

               await inquirer.prompt([
                {
                   type: "input",
                   message: "What is your Engineer's Name?",
                   name: "engineerName",
                },
                {
                    type: "input",
                    message: "What is your Engineer's Id?",
                    name: "engineerId",
                 },
                 {
                    type: "input",
                    message: "What is your Engineer's Email?",
                    name: "engineerEmail",
                 },
                 {
                    type: "input",
                    message: "What is your Engineer's Github Username?",
                    name: "engineerUsername",
                 },
              
                ])
            break;
     
             
            case 'Intern':
               await inquirer.prompt([
                {
                   type: "input",
                   message: "What is your Intern's Name?",
                   name: "internName",
                },
                {
                    type: "input",
                    message: "What is your Intern's Id?",
                    name: "internId",
                 },
                 {
                    type: "input",
                    message: "What is your Intern's Email?",
                    name: "internEmail",
                 },
                 {
                    type: "input",
                    message: "What is your Intern's School?",
                    name: "internSchool",
                 },
                
                ])
                break;

            }
            if(value === 'Engineer'){
                return true;
            }else if(value === 'Intern'){
                return true;
            }
    
        }


    // To validate whether questions are answered. If not, return 'Please enter the detail' message
    function answerValidation(value){
        if(value!="") return true;
        else return `Please enter the detail`;
      }
      
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

