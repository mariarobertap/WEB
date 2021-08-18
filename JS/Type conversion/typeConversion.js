/*Changing the datatype of a value to another*/
document.getElementById("myButton").onclick = function(){
    var myAge = document.getElementById("myAge").value;
    console.log("Age " + myAge);
    console.log("Happy bday");
    myAge = Number(myAge);
    myAge += 1;

    console.log(typeof myAge);
    console.log("You are getting old. "+ myAge);

    console.log("Happy bday");
    myAge = String(myAge);
    myAge += 1;

    console.log(typeof myAge);
    console.log("You are getting old. "+ myAge);

;};
