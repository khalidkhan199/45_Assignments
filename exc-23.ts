// +++++ Excersice 23 +++++

// Conditional Tests:
// Write a series of conditional tests. Print a statement describing each test and your prediction
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False

let car = 'subaru';

// 5 TRUE TESTS
console.log("\n5 TRUE TESTS\n");

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'Toyota'? I predict True.");
console.log(car!= 'Toyota');

console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6);

console.log("Is car.length != 8? I predict True.");
console.log(car.length != 8);

console.log("Is car.length < 8? I predict True.");
console.log(car.length < 8);

// 5 FALSE TESTS
console.log("\n5 FALSE TESTS\n");

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

console.log("Is car != 'subaru'? I predict False.");
console.log(car!= 'subaru');

console.log("Is car.length == 10? I predict False.");
console.log(car.length == 10);

console.log("Is car.length != 6? I predict False.");
console.log(car.length != 6);

console.log("Is car.length < 5? I predict False.");
console.log(car.length < 5);

