// CS10 GRADE CALC BY AUSTIN

// Button event listener
document.getElementById("calculate").addEventListener("click", calculateGrade);

function getLetterGrade(percentGrade) {
  if (percentGrade >= 90 && percentGrade <= 100) {
    return "A";
  } else if (percentGrade >= 75 && percentGrade <= 89) {
    return "B";
  } else if (percentGrade >= 60 && percentGrade <= 74) {
    return "C";
  } else if (percentGrade >= 50 && percentGrade <= 59) {
    return "D";
  } else {
    return "F";
  }
}

function calculateGrade() {
  // Grabbing input

  // css1 = client side scripting 1
  let css1 = +document.getElementById("css1").value;
  document.getElementById("lettergradeCSS1").innerHTML = getLetterGrade(css1);

  // css2 = client side scripting 2
  let css2 = +document.getElementById("css2").value;
  document.getElementById("lettergradeCSS2").innerHTML = getLetterGrade(css2);

  // sp1 = structured programming 1
  let sp1 = +document.getElementById("sp1").value;
  document.getElementById("lettergradeSP1").innerHTML = getLetterGrade(sp1);

  // sp2 = structured programming 2
  let sp2 = +document.getElementById("sp2").value;
  document.getElementById("lettergradeSP2").innerHTML = getLetterGrade(sp2);

  // PA = project A
  let pA = +document.getElementById("pA").value;
  document.getElementById("lettergradepA").innerHTML = getLetterGrade(pA);

  // Processing (getting sum then divide by 5 to find average)
  let average = (css1 + css2 + sp1 + sp2 + pA) / 5;

  // Output
  document.getElementById("output").innerHTML = Math.round(average);

  document.getElementById("lettergradefinal").innerHTML =
    getLetterGrade(average);
}
