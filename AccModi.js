var person1 = /** @class */ (function () {
    // private firstname: string;     //these are field 
    // private lastname: string;
    // private age: number;
    function person1(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        // this.firstname = firstname;
        //  this.lastname = lastname;
        //  this.age = age;
    }
    person1.prototype.getFirstname = function () {
        console.log("My first name is " + this.firstname + " " + this.lastname + " " + this.age);
    };
    person1.prototype.getLastName = function () {
    };
    return person1;
}());
var newobjs = new person1("Rucha", "kshirsagar", 23); //creating a new object
// newobjs.age = 24;      //e.g if we dont want to access age again  //we can not modifies this outside the class
newobjs.age = 24;
newobjs.getFirstname();
