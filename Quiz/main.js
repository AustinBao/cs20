// CS10 QUIZ BY AUSTIN

// Button event listener
document.getElementById("submit").addEventListener("click", quizResults);

let score = 0;
function quizResults() {
  score += markQuestion(1, "google");
  score += markQuestion(2, "personal identification number");
  score += markQuestion(3, "cookie");
  score += markQuestion(4, "wireless fidelity");
  score += markQuestion(5, "android");
  score += markQuestion(6, "league of legends");
  score += markQuestion(7, "league of legends");
  score += markQuestion(8, "league of legends");
  score += markQuestion(9, "league of legends");
  score += markQuestion(10, "league of legends");
  console.log(score);
}

function markQuestion(qNum, correctAnswer) {
  if (
    document.getElementById(String(qNum)).value.toLowerCase() === correctAnswer
  ) {
    return 1;
  } else {
    return 0;
  }
}

// document.getElementById("showanswers").addEventListener("click", displayAnswer);

// document.getElementById("hideanswers").addEventListener("click", removeAnswer);

//   if (cookie.value.toLowerCase() === "cookie") {
//     score++;
//     cookie.style.outline = "2px solid green";
//   } else {
//     cookie.style.outline = "2px solid red";
//   }

//   if (wirelessfidelity.value.toLowerCase() === "wireless fidelity") {
//     score++;
//     wirelessfidelity.style.outline = "2px solid green";
//   } else {
//     wirelessfidelity.style.outline = "2px solid red";
//   }

//   if (android.value.toLowerCase() === "android") {
//     score++;
//     android.style.outline = "2px solid green";
//   } else {
//     android.style.outline = "2px solid red";
//   }

//   if (
//     faang.value.toLowerCase() === "facebook" ||
//     faang.value.toLowerCase() === "apple" ||
//     faang.value.toLowerCase() === "amazon" ||
//     faang.value.toLowerCase() === "netflix" ||
//     faang.value.toLowerCase() === "google"
//   ) {
//     score++;
//     faang.style.outline = "2px solid green";
//   } else {
//     faang.style.outline = "2px solid red";
//   }

//   if (firstcode.value.toLowerCase() === "fortran") {
//     score++;
//     firstcode.style.outline = "2px solid green";
//   } else {
//     firstcode.style.outline = "2px solid red";
//   }

//   if (oak.value.toLowerCase() === "oak") {
//     score++;
//     oak.style.outline = "2px solid green";
//   } else {
//     oak.style.outline = "2px solid red";
//   }

//   if (montypython.value.toLowerCase() === "monty python") {
//     score++;
//     montypython.style.outline = "2px solid green";
//   } else {
//     montypython.style.outline = "2px solid red";
//   }

//   if (leagueoflegends.value.toLowerCase() === "league of legends") {
//     score++;
//     leagueoflegends.style.outline = "2px solid green";
//   } else {
//     leagueoflegends.style.outline = "2px solid red";
//   }

//   let percent = Math.round((score / 10) * 100);

//   document.getElementById("result").innerHTML = `${score}/10 or ${percent}%`;

//   let encourage = document.getElementById("encourage");
//   if (score >= 9) {
//     encourage.innerHTML = "Aced!";
//     encourage.style.color = "green";
//   } else if (score >= 7) {
//     encourage.innerHTML = "Very well done!";
//     encourage.style.color = "green";
//   } else if (score >= 5) {
//     encourage.innerHTML = "Not bad!";
//     encourage.style.color = "lime";
//   } else if (score >= 3) {
//     encourage.innerHTML = "Keep trying!";
//     encourage.style.color = "orange";
//   } else {
//     encourage.innerHTML = "You need to study more!";
//     encourage.style.color = "red";
//   }
// }

// function displayAnswer() {
//   document.getElementById("googleAnswer").innerHTML = "*Google";
//   document.getElementById("pinAnswer").innerHTML =
//     "*Personal Identification Number";
//   document.getElementById("cookieAnswer").innerHTML = "*Cookie";
//   document.getElementById("wifiAnswer").innerHTML = "*Wireless fidelity";
//   document.getElementById("androidAnswer").innerHTML = "*Android";
//   document.getElementById("faangAnswer").innerHTML =
//     "*Facebook, Apple, Amazon, Netflix, or Google";
//   document.getElementById("firstcodeAnswer").innerHTML = "*Fortran";
//   document.getElementById("oakAnswer").innerHTML = "*Oak";
//   document.getElementById("montypythonAnswer").innerHTML = "*Monty Python";

//   document.getElementById("leagueAnswer").innerHTML = "*League of Legends";
// }

// function removeAnswer() {
//   document.getElementById("googleAnswer").innerHTML = "";
//   document.getElementById("pinAnswer").innerHTML = "";
//   document.getElementById("cookieAnswer").innerHTML = "";
//   document.getElementById("wifiAnswer").innerHTML = "";
//   document.getElementById("androidAnswer").innerHTML = "";
//   document.getElementById("faangAnswer").innerHTML = "";
//   document.getElementById("firstcode").innerHTML = "";
//   document.getElementById("oak").innerHTML = "";
//   document.getElementById("montypython").innerHTML = "";
//   document.getElementById("leagueAnswer").innerHTML = "";
// }
