interface Animal{
    id : number;
    fname: string;

    bark():void;
    eat():void;
}
class Dog implements Animal{
    id: number;
    fname: string;

    constructor(){
        this.id = 107;
        this.fname = 'Kalu';
    }
    bark():void{
        console.log(this.id);
        console.log(this.fname);
    }
    eat():void{
        console.log("Kalu is eating");
    }
    
}
const myDog = new Dog(); 
 
myDog.bark(); 
myDog.eat();