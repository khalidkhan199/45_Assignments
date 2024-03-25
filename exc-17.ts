// +++++ Excersice 17 +++++

// Shrinking Guest List:
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.

const myFriends: string[] = ["Khalid", "Fawad", " Moin", " Shahzad", " Faraz", " Habib"];

console.log(`Sorry for the inconvenience, I don't have a table. I can invite only 2 friend\n`);

// Pop function removes the last element of an array.
let friend1 = myFriends.pop();
console.log(`Sorry ${friend1}, I can't invite you for Dinner`);

let friend2 = myFriends.pop();
console.log(`Sorry ${friend2}, I can't invite you for Dinner`);

let friend3 = myFriends.pop();
console.log(`Sorry ${friend3}, I can't invite you for Dinner`);

let friend4 = myFriends.pop();
console.log(`Sorry ${friend4}, I can't invite you for Dinner \n \n`);

for (let i = 0;  i < myFriends.length; i++) {
    console.log(`Hello ${myFriends[i]}, You are Still Invited for Dinner`);
}

myFriends.pop();
myFriends.pop();

console.log(myFriends);