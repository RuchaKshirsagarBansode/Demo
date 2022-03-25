class person1 {
    // private firstname: string;     //these are field 
    // private lastname: string;
    // private age: number;

    constructor(private firstname: string,private lastname: string, private age: number){
        // this.firstname = firstname;
        //  this.lastname = lastname;
        //  this.age = age;
    }

    getFirstname() {    //this is method //whenever we define this inside class then this is called method not a function
        console.log("My first name is "+ this.firstname + " " + this.lastname + " " + this.age);
    }

    getLastName() {
        
    }

}

let newobjs = new person1("Rucha" , "kshirsagar" , 23);   //creating a new object
  // newobjs.age = 24;      //e.g if we dont want to access age again  //we can not modifies this outside the class
  newobjs.getFirstname();

