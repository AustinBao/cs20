// Investment Accounts Start Code

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let maxDataVal = 5000; // max data value

// *****************************************************
// INITIALIZE ACCOUNTS ARRAY
// *****************************************************
let accounts = [];
for (let i = 0; i < 50; i++) {
  accounts.push(randomInt(0, 5000));
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function deposit() {
  // Prompt the user for the index of an account and the amount to deposit into that account.
  let accountsindex = prompt(
    "What account index do you want to deposit money into?"
  );
  let deposit = +prompt("How much money do you want to deposit?");

  // Modify the accounts array to reflect the deposit.
  accounts[accountsindex] += deposit;

  // Adjust the maxDataVal variable if necessary.
  if (accounts[accountsindex] > maxDataVal) {
    maxDataVal = accounts[accountsindex];
  }
  // Use the outputEl to provide a confirmation message.
  outputEl.innerHTML = `Deposited $${deposit} into account ${accountsindex}`;
}

function withdrawal() {
  // Prompt the user for the index of an account and the amount to withdraw from that account.
  let accountsindex = prompt(
    "What account index do you want to withdraw money from?"
  );
  let withdraw = +prompt("How much moeny do you want to withdraw?");

  // Check to assure that the account has enough funds.
  if (accounts[accountsindex] - withdraw < 0) {
    // Use the outputEl to provide a decline message.
    outputEl.innerHTML = `Withdraw failed. Not enough funds.`;
    return;
  } else {
    // Modify the accounts array to reflect the withdrawal.
    accounts[accountsindex] -= withdraw;
  }
  // Use the outputEl to provide a confirmation message.
  outputEl.innerHTML = `Withdrew $${withdraw} from account ${accountsindex}`;
}

function countUnder2000() {
  // Count the number of accounts that are less than 2000
  // Use the outputEl to display the results of the count.
  let counter = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      counter++;
    }
  }
  outputEl.innerHTML = `Accounts Under $2000: ${counter}`;
}

function generousDonor() {
  let moneydonated = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      // A generous donor has decided to give $500 to every investment account that has less than $2000.
      // Modify the investment account array to apply this donation.
      accounts[i] += 500;
      moneydonated += 500;
    }
  }
  // Use the outputEl to display the total amount of money that was donated.
  outputEl.innerHTML = `Generous Donor donated: ${moneydonated}`;
}

function hackerAttack() {
  let moneystolen = 0;
  for (let i = 0; i < accounts.length; i++) {
    // A hacker steals 5% from every account.
    let newvalue = accounts[i] * 0.95;
    // Modify the investment account array to apply this theft.
    accounts[i] = newvalue;
    moneystolen += newvalue;
  }
  // Use the outputEl to display the total amount that was stolen. toFixed() function sets the decimals to the second decimal
  outputEl.innerHTML = `Hacker Attacked and stole: ${moneystolen.toFixed(2)}`;
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// Display Data
drawArray(accounts, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "deposit") {
    deposit();
  } else if (selection === "withdrawal") {
    withdrawal();
  } else if (selection === "count") {
    countUnder2000();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "attack") {
    hackerAttack();
  }

  // Redraw array to show any changes
  drawArray(accounts, maxDataVal);
}

// DRAW ARRAY FUNCTION
// Function to draw current state of accounts array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
