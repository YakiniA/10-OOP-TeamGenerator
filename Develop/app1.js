const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

 function Managerfn() {
  // try{
  //   const { data } = await
   inquirer.prompt([
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
        validate: idValidation
      },
      {
        type: "input",
        message: "What is your Manager's email?",
        name: "managerEmail",
        validate: emailValidation
      },
      {
        type: "input",
        message: "What is your Manager's office number?",
        name: "managerNo",
        validate: answerValidation
      }
    
    ]).then(function(answers){
         const manager = new Manager(answers.managerName ,answers.managerId, answers.managerEmail, managerNo )
         Teamfn();
  
        }) .catch(function(err) {
      console.log(err);
    });
  }

 

  function Teamfn() {
   
     inquirer.prompt([
      {
        type: "list",
        message: "Which type of team you would like to add?",
        name: "choice",
        choices: [
          "Engineer",
          "Intern",
          "Don't want to add more team members"
        ]
      }
      
      ]).then(teamChoice => {
     
        switch(teamChoice.choice){
          case `Engineer`:
            Engineerfn();
            break;
           
           case `Intern`:
            
             Internfn();
             break;
            
           default:
              
              Defaultfn();
              break;
              
          }
        })
        .catch(function(err) {
        console.log(err);
      });
    }
 
    // To validate whether questions are answered. If not, return 'Please enter the detail' message
    function answerValidation(value){
        if(value!="") return true;
        else return `Please enter the detail`;
      }
      
    // To validate whether id is entered. If not, return 'Please enter the detail' message
    function idValidation(value){
      const id = /^[1-9]\d*$/;
     
      if (value.match(id)) {
        return true;
      }
      return "Please enter valid number.";
    }
    
    //To validate whether the email entered is correct. If not, return 'Please enter valid email' message
    function emailValidation(value){

      var mailformat = /\S+@\S+\.\S+/;
      if(value.match(mailformat))
       return true;
     
      else
      return `Please enter valid email`;
    }

    //To validate the GitHub account. If not valid, return 'Invalid user message'
   async function gitHubValidation(value){
 
      const queryUrl = `https://api.github.com/users/${value}`;
      try{
       const response = await axios.get(queryUrl);
        if(response.status === 200){
          return true;
        }
      }catch (error) {
        return `Invalid User`;
        
      };
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

