function sayHello(myName, myAge){
    console.log("Hello", myName);
    console.log("You are", myAge, "Years old");

};

sayHello("Maria", 20);

function toCelsius(f){
    var result = (f - 32) * (5/9);
    return result;
};

document.getElementById("myButton").onclick = function(){
    var f = document.getElementById("number").value;
    var result = (f - 32) * (5/9);
    alert(result);
    return result;
};