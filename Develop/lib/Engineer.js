// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Engineer =  function(name, id, email, gitHubUser){
    this.name =name;
    this.id= id;
    this.email = email;
    this.github = gitHubUser;
    }

            
Engineer.prototype.getRole = () => `Engineer`;
    

Engineer.prototype.getGithub = function(){
    return this.github;
    }

module.exports = Engineer;