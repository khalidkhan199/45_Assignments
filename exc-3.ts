// +++++ Excersice 03 +++++

// Name Cases:
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.

const personName: string = "Khalid Khan";

// To Lower Case
console.log(personName.toLowerCase());

// To Upper Case
console.log(personName.toUpperCase());

// To Title Case

let titlePersonName: string = "khalid khan";
console.log(titlePersonName.charAt(0).toUpperCase() + titlePersonName.slice(1));
