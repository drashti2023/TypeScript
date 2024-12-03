"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayDetails() {
        console.log(this.name);
        console.log(this.age);
    }
}
const p1 = new Person('Drashti', 19);
p1.displayDetails();
