// let namets = (firstname:string , lastname:string) => {
//     console.log(firstname);
// }
var namets = function (namepro) {
    console.log(namepro.firstname + " " + namepro.lastname);
};
namets({
    firstname: "Rucha",
    lastname: "Kshirsagar"
});
