// +++++ Excersice 13 +++++

// Your Own Array:
// Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
// that stores several examples. Use your list to print a series of statements about these items, such as
// “I would like to own a Honda motorcycle.”

const myTransport: string[] = ["Car", "Bike", "Cycle", "Bus"];

// For Loop Method
for (let i = 0; i < myTransport.length; i++) {
    console.log(`I would like to own a ${myTransport[i]}`);
}


// Map Method
myTransport.map((ii) => {
    console.log(`I would like to own a ${ii}`);
});