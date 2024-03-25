// +++++ Excersice 44 +++++

// Sandwiches:
// Write a function that accepts an array of items a person wants on a sandwich. The function
// should have one parameter that collects as many items as the function call provides, and it should
// print a summary of the sandwich that is being ordered. Call the function three times, using a different
// number of arguments each time.

function sandwich(...items: string[]) {
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}

console.log("\nOrder 1:\n");
sandwich("Bacon", "Cheese", "Lettuce");

console.log("\nOrder 2:\n");
sandwich("Turkey", "Cheese", "Lettuce", "Tomato");

console.log("\nOrder 3:\n");
sandwich("Avocado", "Spice");