// let namets = (firstname:string , lastname:string) => {
//     console.log(firstname);
// }

// namets("Rucha", "Kshirsagar");





//Inline Type Annotation
// let namets = (namepro:{firstname:String , lastname:string}) => {
// //let namets = (namepro) => {
//     console.log(namepro.firstname);
// }

// namets({
//     firstname:"Rucha",
//     lastname: "Kshirsagar"
// });



//Using Interface
 
interface Namepro{   //interface name should start with captital letter
    firstname:String ,  
    lastname:string ,
}

let namets = (namepro: Namepro) => {
        console.log(namepro.firstname + " " + namepro.lastname);
    }
    
    namets({
        firstname:"Rucha",
        lastname: "Kshirsagar"
    });
    

