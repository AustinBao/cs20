// Nickname Generator BY AUSTIN

// Button Event Listeners
document.getElementById("allbtn").addEventListener("click", allNickname);
document.getElementById("randbtn").addEventListener("click", randomNickname);

// array with all the nicknames I made
let nicknames = [
  "Ruby",
  "Gorlock",
  "Natty",
  "Sandy",
  "Nanny",
  "Gear",
  "Tray",
  "Pencil",
  "Funky",
];

let results = document.getElementById("results");

function allNickname() {
  // reset list of nicknames
  results.innerHTML = "";

  // grab input
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  // loop through all nicknames and display them by adding to a <div> tag in html
  for (let i = 0; i < nicknames.length; i++) {
    results.innerHTML += `<p>${firstname} "${nicknames[i]}" ${lastname}</p>`;
  }
}

function randomNickname() {
  // reset list of nicknames
  results.innerHTML = "";

  // grab input
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  // Gets a random index of our nicknames array. Uses floor function which lowers all decimal values to the base integer (thus no decimals in randnum)
  let randnum = Math.floor(Math.random() * nicknames.length);
  // console.log(randnum);

  // set <div> tag to our result. Displays output
  results.innerHTML += `<p>${firstname} "${nicknames[randnum]}" ${lastname}</p>`;
}
