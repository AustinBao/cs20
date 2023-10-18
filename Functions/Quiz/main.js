// CS10 QUIZ BY AUSTIN

// Button event listener
document.getElementById("submit").addEventListener("click", quizResults);

function quizResults() {
  // sets score to 0 each time you submit quiz
  let score = 0;

  score += markQuestion(1, "salmon");
  score += markQuestion(2, "cod");
  score += markQuestion(3, "catfish");
  score += markQuestion(4, "tuna");
  score += markQuestion(5, "swordfish");
  score += markQuestion(6, "mackerel");
  score += markQuestion(7, "anchovy");

  // calculate percent to display right after
  let percent = Math.round((score / 7) * 100);

  document.getElementById("result").innerHTML = `${score}/7 or ${percent}%`;

  // gives encouragment depending on what your score is
  let encourage = document.getElementById("encourage");
  if (score === 7) {
    encourage.innerHTML = "Aced!";
    encourage.style.color = "green";
  } else if (score >= 5) {
    encourage.innerHTML = "Very well done!";
    encourage.style.color = "green";
  } else if (score >= 2) {
    encourage.innerHTML = "Not bad!";
    encourage.style.color = "orange";
  } else {
    encourage.innerHTML = "You need to study more!";
    encourage.style.color = "red";
  }
}

// checks the id of html input elements and sees if the input value is equal to the provided answer
function markQuestion(qNum, correctAnswer) {
  let currentInput = document.getElementById(String(qNum));

  if (currentInput.value.toLowerCase() === correctAnswer) {
    currentInput.style.outline = "2px solid green";
    return 1;
  }
  currentInput.style.outline = "2px solid red";
  return 0;
}
