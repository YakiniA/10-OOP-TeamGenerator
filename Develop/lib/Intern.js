// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Intern =  function(name, id, email, school){
    this.name =name;
    this.id= id;
    this.email = email;
    this.school = school;
    }

Intern.prototype.getRole = () => `Intern`;

Intern.prototype.getSchool = function(){
    return this.school;
    }

module.exports = Intern;     