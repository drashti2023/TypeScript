let someValue: any = "Hello, TypeScript!";

let strLength1: number = (<string>someValue).length;
console.log("Length using angle-bracket syntax:", strLength1);

let strLength2: number = (someValue as string).length;
console.log("Length using 'as' syntax:", strLength2);
