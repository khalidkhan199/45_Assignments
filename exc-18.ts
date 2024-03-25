// +++++ Excersice 18 +++++

// Seeing the World:
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


// • Store the locations in an array. Make sure the array is not in alphabetical order.
let myPlaces: string [] = ["Saudi Arabia", "America", "Canada", "Turkey", "Spain", "Oman"];

// • Print your array in its original order.
console.log("\nOriginal Array:\n", myPlaces);

// • Print your array in alphabetical order without modifying the actual list.
let aplhaSortedArray = [...myPlaces].sort();
console.log("\nAlphabetically sorted array:\n", aplhaSortedArray);

// • Show that your array is still in its original order by printing it.
console.log("\nStill in original order:\n", myPlaces);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let reversedAlhplhaSortedArray = [...myPlaces].sort().reverse();
console.log("\nReversed Alphabetically Sorted Array:\n", reversedAlhplhaSortedArray);

// • Show that your array is still in its original order by printing it again.
console.log("\nStill in original order:\n", myPlaces);

// • Reverse the order of your list. Print the array to show that its order has changed.
myPlaces.reverse();
console.log("\nReversed Array:\n", myPlaces);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
myPlaces.reverse();
console.log("\nBack to Original Order\n", myPlaces);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
myPlaces.sort();
console.log("\nAlphabetically Sorted Array:\n", myPlaces);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
myPlaces.sort().reverse();
console.log("\nReversed Alphabetically Sorted Array:\n", myPlaces);
