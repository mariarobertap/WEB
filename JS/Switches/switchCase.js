

// switch =  statement that evaluates a value/expression, 
//           matches the value to many case clauses
//           more efficient that many "else if" statements

var grade = "F";

switch (grade){

  case "A":
    console.log("You did great!");
    break;
  
  case "B":
    console.log("You did good!");
    break;

  case "C":
    console.log("You did okay!");
    break;

  case "D":
    console.log("You... did not do that well!");
    break;

  case "F":
    console.log("YOU FAILED!");
    break;

  default:
    console.log(grade,"is not a letter grade");
}