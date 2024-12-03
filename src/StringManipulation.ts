function stringManipulation() {
    let str1: string = "Hello";
    let str2: string = "World";
    
    let concatenatedStr: string = str1 + " " + str2;
    console.log("Concatenated String: " + concatenatedStr);
    
    let lengthOfStr: number = concatenatedStr.length;
    console.log("Length of Concatenated String: " + lengthOfStr);
    
    let substring: string = concatenatedStr.substring(6, 11);
    console.log("Substring (from index 6 to 11): " + substring);
    
    let replacedStr: string = concatenatedStr.replace("World", "Drashti");
    console.log("Replaced String: " + replacedStr);
    
    let upperCaseStr: string = concatenatedStr.toUpperCase();
    console.log("Upper Case String: " + upperCaseStr);
    
    let lowerCaseStr: string = concatenatedStr.toLowerCase();
    console.log("Lower Case String: " + lowerCaseStr);
}

stringManipulation();
