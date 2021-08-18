var human = {
    name: "Maria",
    age: 20,

    develop : function(){
        console.log(this.name, "Dev is programming =]");
    }
};

//human  = new human
//console.log(human);
human.develop();

human.age //dot notation
human['age']//bracket notation