"use strict";
function stringManipulation() {
    let str1 = "Hello";
    let str2 = "World";
    let concatenatedStr = str1 + " " + str2;
    console.log("Concatenated String: " + concatenatedStr);
    let lengthOfStr = concatenatedStr.length;
    console.log("Length of Concatenated String: " + lengthOfStr);
    let substring = concatenatedStr.substring(6, 11);
    console.log("Substring (from index 6 to 11): " + substring);
    let replacedStr = concatenatedStr.replace("World", "Drashti");
    console.log("Replaced String: " + replacedStr);
    let upperCaseStr = concatenatedStr.toUpperCase();
    console.log("Upper Case String: " + upperCaseStr);
    let lowerCaseStr = concatenatedStr.toLowerCase();
    console.log("Lower Case String: " + lowerCaseStr);
}
stringManipulation();
