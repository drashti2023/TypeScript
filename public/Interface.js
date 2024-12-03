"use strict";
class Dog {
    constructor() {
        this.id = 107;
        this.fname = 'Kalu';
    }
    bark() {
        console.log(this.id);
        console.log(this.fname);
    }
    eat() {
        console.log("Kalu is eating");
    }
}
const myDog = new Dog();
myDog.bark();
myDog.eat();
