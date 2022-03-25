
//In other lang we can create multiple constructor but in 
//TS we can create only one constructor

class persons {
    firstname: string;     //these are field 
    lastname: string;
    age: number;

    constructor(firstname: string, lastname: string, age: number){    //constructor is method in which we can pass parameter
        //here the parameter name and classes fields are same, hense to avoid ambiguity, 
        //the class field is prefixed with the this keyword
        
        this.firstname = firstname;
         this.lastname = lastname;
         this.age = age;
    }

    getFirstname() {    //this is method //whenever we define this inside class then this is called method not a function
        console.log("My name is "+ this.firstname + " " + this.lastname + " " + this.age );
    }

    getLastName() {
        //
    }

}

let obj = new persons("Rucha", "Kshirsagar" , 23);   //creating a new object
obj.getFirstname();
