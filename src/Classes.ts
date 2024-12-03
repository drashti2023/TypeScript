class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayDetails(): void {
        console.log(this.name);
        console.log(this.age);
    }
}

const p1 = new Person('Drashti', 19);

p1.displayDetails();
