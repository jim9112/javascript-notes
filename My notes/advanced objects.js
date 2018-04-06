// Reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};


object1 === object2;
// this will return true
object1 === object3;
// this will return false because they are different objects even though they have the same value.



object1.value;
object2.value;
object3.value;


// context
const object4 = {
    a: function() {
        console.log(this);
    }
}
// "this" is the current object level

class Player {
    constructor(name, type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');