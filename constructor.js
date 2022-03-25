//In other lang we can create multiple constructor but in 
//TS we can create only one constructor
var persons = /** @class */ (function () {
    function persons(firstname, lastname, age) {
        //here the parameter name and classes fields are same, hense to avoid ambiguity, 
        //the class field is prefixed with the this keyword
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    persons.prototype.getFirstname = function () {
        console.log("My name is " + this.firstname + " " + this.lastname + " " + this.age);
    };
    persons.prototype.getLastName = function () {
        //
    };
    return persons;
}());
var obj = new persons("Rucha", "Kshirsagar", 23); //creating a new object
obj.getFirstname();
