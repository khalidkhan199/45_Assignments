// +++++ Excersice 43 +++++

// Unchanged Magicians:
// Start with your work from Exercise 40. Call the function make_great() with a copy of the array
// of magicians’ names. Because the original array will be unchanged, return the new array and store it
// in a separate array. Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.

function make_great(magicians) {
  const greatMagicians : string[] = [];
  
  for (let magician of magicians) {
    greatMagicians.push(`The Great ${magician}`);
  }

  return greatMagicians;
}

function show_magicians(magicians) {
  for (let magician of magicians) {
    console.log(magician);
  }
}

const magicians = ["Khalid", "Fawad", "Moin", "Shahid", "Aslam"];

const greatMagicians = make_great(magicians);

show_magicians(magicians);

show_magicians(greatMagicians);