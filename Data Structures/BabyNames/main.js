// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");
let babyCounter;

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // clear containers previous elements each time button is clicked
  container.innerHTML = "";

  // sets baby counter to 0 with every new search
  babyCounter = 0;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  // set name counter equal to the array's length since we are displaying everything
  nameCountSpan.innerHTML = babyData.length;

  // loop through the entire array and display as html elements
  for (let i = 0; i < babyData.length; i++) {
    container.innerHTML += `<p> <strong> ${babyData[i].name} </strong> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender}) </p>`;
  }
}

// Display Names by Gender
function searchGender() {
  // asks user for gender (not case sensitive. Has to be "Boy" or "Girl" nothing else)
  let gender = prompt("Please enter gender (Boy/Girl):");

  for (let i = 0; i < babyData.length; i++) {
    // if statement to check if the gender is the user's entered gender
    if (babyData[i].gender === `${gender}`) {
      container.innerHTML += `<p> <strong> ${babyData[i].name} </strong> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender}) </p>`;

      // add to the total babyCounter if the gender matches the users requested gender
      babyCounter += 1;
    }
  }
  // display babyCounter at the end after looping through all possible baby objects in array
  nameCountSpan.innerHTML = babyCounter;
}

// Display Names within a Range of Ranks
function searchRank() {
  let min = prompt("Please enter minimum rank:");
  let max = prompt("Please enter maximum rank:");

  // loop through all objects in array
  for (let i = 0; i < babyData.length; i++) {
    // if current objects rank is between the min and max, display it
    if (babyData[i].rank >= `${min}` && babyData[i].rank <= `${max}`) {
      container.innerHTML += `<p> <strong> ${babyData[i].name} </strong> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender}) </p>`;

      babyCounter += 1;
    }
  }
  nameCountSpan.innerHTML = babyCounter;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let start = prompt("Please enter starting letter:");

  for (let i = 0; i < babyData.length; i++) {
    // if current objects name starts with user's "start" letter, display the baby's info
    if (babyData[i].name.startsWith(`${start}`)) {
      container.innerHTML += `<p> <strong> ${babyData[i].name} </strong> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender}) </p>`;

      babyCounter += 1;
    }
  }
  nameCountSpan.innerHTML = babyCounter;
}

// Display Names with a Specific Length
function searchLength() {
  // Get name length in the form of an integer using "+" at the front of prompt
  let namelength = +prompt("Please enter name length:");

  for (let i = 0; i < babyData.length; i++) {
    // if length of current baby's name is equal to the user's requested namelength, then display the baby's information
    if (babyData[i].name.length === namelength) {
      container.innerHTML += `<p> <strong> ${babyData[i].name} </strong> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender}) </p>`;

      babyCounter += 1;
    }
  }
  nameCountSpan.innerHTML = babyCounter;
}
