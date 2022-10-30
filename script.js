let person = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 27,
    updateAge: function(){
        return ++person.age;
    }
}

function Person(name,eyeColor,age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return this.age++;
    };
}

let person01 = new Person("Daniel","Blue", 27);
let person02 = new Person("John","Red", 19);
console.log("Hello" + ' ' + person02.name);