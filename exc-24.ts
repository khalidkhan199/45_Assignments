// +++++ Excersice 24 +++++

// More Conditional Tests:
// You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array

let myName = "Khalid";

// • Tests for equality and inequality with strings
// • Tests using the lower case function

console.log("\nString Tests\n");
console.log(myName === "Khalid");
console.log(myName == "khalid");
console.log(myName.toLowerCase() === "khalid");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to

let myNumber = 10;

console.log("\nNumerical Tests\n");
console.log(myNumber == 10);
console.log(myNumber!= 10);
console.log(myNumber > 5);
console.log(myNumber < 5)
console.log(myNumber >= 10);
console.log(myNumber <= 5);

// • Tests using "and" and "or" operators

let num1 = 10;
let num2 = 5;

console.log(`\nLogical Operators\n`);
console.log(num1 > 5 && num2 < 10);
console.log(num2 == 10 || num1 != 10);

// • Test whether an item is in an array
// • Test whether an item is not in an array

let myArray = ["Khalid", "Fawad", "Moin", "Shahzad", "Uzair", "Arham"]

console.log(`\nArray Tests\n`);

if (myArray.includes("Khalid")) {
    console.log("Khalid is in my Array");
} else {
    console.log("Khalid is not in my Array");
}

if (!myArray.includes("Zahid")) {
    console.log("Zahid is not in my Array");
} else {
    console.log("Zahid is in my Array");
}