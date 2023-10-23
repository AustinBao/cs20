// CS10 MAGIC8BALL BY AUSTIN

let result = document.getElementById("result");

// Button event listener
document.getElementById("submitbtn").addEventListener("click", magic8ball);

function randomResponse() {
  // generates random number
  let randnum = Math.random();

  // function that depending on the value of the random number, gives a response
  if (randnum < 0.2) {
    return "Without a Doubt.";
  } else if (randnum < 0.4) {
    return "As I see it, yes.";
  } else if (randnum < 0.6) {
    return "Concentrate and ask again.";
  } else if (randnum < 0.8) {
    return "Don't count on it.";
  } else {
    return "Outlook not so good.";
  }
}

// Main function
function getResponse(question) {
  // Checks special cases and gives feedback for them
  if (question.length === 0) {
    return "Please ask a question…";
  } else if (question === "does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (question === "is javascript awesome?") {
    return "Of Course!";
  } else {
    // if user didn't input a special case, run randomResponse()
    return randomResponse();
  }
}

function magic8ball() {
  // Case insensitive
  let question = document.getElementById("question").value.toLowerCase();

  // Display output
  result.innerHTML = getResponse(question);
}
