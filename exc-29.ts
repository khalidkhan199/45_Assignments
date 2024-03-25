// +++++ Excersice 29 +++++

// Favorite Fruit:
// Make an array of your favorite fruits, and then write a series of independent if statements that
// check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
// is in your array, the if block should print a statement,
// such as You really like bananas!
// • Make sure to use the === operator to check for equality.

let favorite_fruits = ["bananas", "apples", "oranges"];

if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
} else {
    console.log("You don't like apples");
}
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges");
}
if (favorite_fruits.includes("strawberries")) {
    console.log("You also like strawberries!");
} else {
    console.log("You don't like strawberries");
}
if (favorite_fruits.includes("mangos")) {
    console.log("You also like mangos!");
} else {
    console.log("You don't like mangos");
}