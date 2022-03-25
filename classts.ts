class person {
    firstname: string;     //these are field 
    lastname: string;
    age: number;

    getFirstname() {    //this is method //whenever we define this inside class then this is called method not a function
        console.log("My first name is "+ this.firstname);
    }

    getLastName() {
        console.log("My last name is " + this.lastname);
    }

}

let newobj = new person();   //creating a new object
newobj.firstname ="Rucha";      
newobj.getFirstname();
newobj.lastname ="Kshirsagar";
newobj.getLastName();
