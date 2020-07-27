// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Manager =  function(name, id, email, officeNumber){
    this.name =name;
    this.id= id;
    this.email = email;
    this.officeNumber = officeNumber;
    }

Manager.prototype.getRole = () =>`Manager`;

Manager.prototype.getOfficeNumber = function(){
    return this.officeNumber;
    }

module.exports = Manager;
