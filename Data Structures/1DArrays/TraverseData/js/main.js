// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.
  countYes = 0;
  countNo = 0;
  countMaybe = 0;
  for (let index = 0; index < surveyData.length; index++) {
    if (surveyData[index] === "Yes") {
      countYes++;
    } else if (surveyData[index] === "No") {
      countNo++;
    } else {
      countMaybe++;
    }
  }

  outputEl.innerHTML = `Yes (${countYes}), No (${countNo}), Maybe (${countMaybe})`;
  console.log(surveyData);
}

function traverseAgeData() {
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  under18 = 0;
  between18and35 = 0;
  between36and65 = 0;
  above65 = 0;

  for (let index = 0; index < ageData.length; index++) {
    if (ageData[index] < 18) {
      under18++;
    } else if (18 <= surveyData[index] && surveyData[index] <= 35) {
      between18and35++;
    } else if (36 <= surveyData[index] && surveyData[index] <= 65) {
      between36and65++;
    } else {
      above65++;
    }
  }

  outputEl.innerHTML = `Under 18 (${under18}), 18 to 35 (${between18and35}), 36 to 65 (${between36and65}), Above 65 (${above65})`;

  console.log(ageData);
}

function traverseNumberData() {
  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  countEven = 0;
  countOdd = 0;

  for (let index = 0; index < numberData.length; index++) {
    if (numberData[index] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }

  outputEl.innerHTML = `Even (${countEven}), Odd (${countOdd})`;

  console.log(numberData);
}
