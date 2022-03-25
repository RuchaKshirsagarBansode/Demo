function sample() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Outside the block" + i); //scope of var keyword is use up to  nearest function 
}
sample();
