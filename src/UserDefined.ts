function addNumbers(a: number, b: number): number {
    return a + b;
}

function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

function factorial(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function main() {
    
    const sum = addNumbers(5, 7);
    console.log(`Sum: ${sum}`);

    const greeting = greetUser("Drashti");
    console.log(greeting);

    const fact = factorial(5);
    console.log(`Factorial: ${fact}`);
}

main();
