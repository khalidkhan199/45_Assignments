// +++++ Excersice 06 +++++

// Stripping Names:
// Store a person’s name, and include some whitespace characters at the beginning and end of
// the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after striping the white
// spaces.

// Simple Space

const myName: string = "    Khalid Khan    ";


console.log(myName);

console.log(myName.trim());

// \t for Tap Space
const spaceName: string = "\tKhalid Khabn";

// \n for Line Break
const newLineName: string = "Khalid\nKhan";

console.log(spaceName);

console.log(newLineName);