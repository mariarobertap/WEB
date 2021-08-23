
 
// ternary operator = Shortcut for if statements. 
//                                  Takes 3 operands

//                                  1. a condition with ?
//                                  2. expression if True :
//                                  3. expression if False

// condition ? exprIfTrue : exprIfFalse


function checkWinner(win){

    win ? console.log("You win!") : console.log("You lose!");
}

checkWinner(false);

function checkAge(age){

    return age >= 21 ? "You get beer!" : "You get apple juice!"
}

console.log(checkAge(17));