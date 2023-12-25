// RANKING LIST START CODE

// HTML Variables
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu").value;

  // Implement Menu Selection
  if (selection === "add") {
    addItem();
  } else if (selection === "remove-last") {
    removeLast();
  } else if (selection === "insert") {
    insert();
  } else if (selection === "remove-pos") {
    removePos();
  } else if (selection === "move") {
    move();
  } else if (selection === "edit") {
    edit();
  }

  // localStorage.setItem("array", JSON.stringify(items));
}
// let items = JSON.parse(localStorage.getItem("array"));

let items = [];

// Menu Option Functions
function addItem() {
  let userinput = prompt("Enter Item:");
  items.push(userinput);
  outputEl.innerHTML += `<div>${items.length}: ${userinput}</div>`;
}

function removeLast() {
  items.pop();
  outputEl.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${items[i]}</div>`;
  }
}

function insert() {
  let position = prompt("Insert Position:");
  let insert = prompt("Enter Item to Insert:");

  items.splice(position - 1, 0, insert);

  outputEl.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${items[i]}</div>`;
  }
}

function removePos() {
  let position = prompt("Remove Position:");
  items.splice(position - 1, 1);
  outputEl.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${items[i]}</div>`;
  }
}

function move() {
  let position1 = prompt("Move item from:");
  let position2 = prompt("Move item to:");

  let item1 = items[position1 - 1];
  let item2 = items[position2 - 1];

  items[position1 - 1] = item2;
  items[position2 - 1] = item1;

  outputEl.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${items[i]}</div>`;
  }
}

function edit() {
  let position = prompt("Enter position:");
  let replaceitem = prompt("Replace with:");

  items[position - 1] = replaceitem;

  outputEl.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    outputEl.innerHTML += `<div>${i + 1}: ${items[i]}</div>`;
  }
}
