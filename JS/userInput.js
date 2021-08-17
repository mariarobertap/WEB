/*Anoying way
var myVersion = window.prompt("What's you age?");
console.log(myVersion);
*/

document.getElementById("myButton").onclick = function(){
    var myAge = document.getElementById("myAge").value;
    console.log("Age " + myAge)
};
