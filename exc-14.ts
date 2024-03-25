// +++++ Excersice 14 +++++

// Guest List:
// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to
// each person, inviting them to dinner.

const myFriends: string[] = ["Khalid", "Fawad", "Moin"];

// For Loop Method

for (let i = 0; i < myFriends.length; i++) {
    console.log(`Mr. ${myFriends[i]}, You are invited for Dinner Today\n`);
}

// Map Method

myFriends.map((ii) => {
    console.log(`Mr. ${ii}, You are invited for Dinner Today\n`);
});