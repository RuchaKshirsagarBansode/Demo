// Type Assertion
//Type assertion have two form
//1. one is the "angle-bracket" syntax:
//The other is the as-syntax:

let training;
training = "nodejs";
(<string>training).length;

(training as string).length;

