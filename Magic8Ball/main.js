// CS10 MAGIC8BALL BY AUSTIN

let result = document.getElementById("result");

// Button event listener
document.getElementById("submitbtn").addEventListener("click", magic8ball);

function randomResponse() {
  let randnum = Math.random();

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

function getResponse(question) {
  if (question.length === 0) {
    return "Please ask a question…";
  } else if (question === "does a magic 8 ball actually work?") {
    return "How dare you doubt me!";
  } else if (question === "is javascript awesome?") {
    return "Of Course!";
  } else {
    return randomResponse();
  }
}

function magic8ball() {
  let question = document.getElementById("question").value.toLowerCase();

  result.innerHTML = getResponse(question);
}
