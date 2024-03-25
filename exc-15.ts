// +++++ Excersice 15 +++++

// Changing Guest List:
// You just heard that one of your guests can’t make the dinner, so you need to send out a new
// set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

const myFriends: string[] = ["Khalid", "Fawad", "Moin"];

console.log(`Due to Some Reason, Mr. ${myFriends[1]} will not join us for Dinner\n`);

myFriends[1] = "Shahid";

console.log(`New List of Friends who are invited for Dinner\n`);

for (let i = 0;  i < myFriends.length; i++) {
    console.log(`Mr. ${myFriends[i]}, You are invited for Dinner Today\n`);
}