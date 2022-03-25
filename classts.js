var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.getFirstname = function () {
        console.log("My first name is " + this.firstname);
    };
    person.prototype.getLastName = function () {
        console.log("My last name is " + this.lastname);
    };
    return person;
}());
var newobj = new person(); //creating a new object
newobj.firstname = "Rucha";
newobj.getFirstname();
newobj.lastname = "Kshirsagar";
newobj.getLastName();
