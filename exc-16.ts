// +++++ Excersice 16 +++++

// More Guests:
// You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


const myFriends: string[] = ["Khalid", " Fawad", " Moin", " Shahzad"];

console.log(`${myFriends}\n3 More Friend can be invited for Dinner\n`);

// To Add in Starting
myFriends.unshift("Habib");

// To Add in Middle
myFriends.splice(2, 1, "Usama");

// To Add in End
myFriends.push("Faraz");

// Print all friends with invitation
for (let i = 0;  i < myFriends.length; i++) {
    console.log(`Hello ${myFriends[i]}, You are Invited for Dinner\n`);
}