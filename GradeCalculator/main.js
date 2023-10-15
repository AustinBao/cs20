// CS10 GRADE CALC BY AUSTIN

// Button event listener
document.getElementById("calculate").addEventListener("click", calculateGrade);

function getLetterGrade(htmlId, percentGrade){
  lettergrade = document.getElementById(htmlId);
  if (percentGrade > 90 && percentGrade < 100 ){
    lettergrade.innerHTML = "A";
  } else if (percentGrade > 75 && percentGrade < 89 ){
    lettergrade.innerHTML = "B";
  } else if (percentGrade > 60 && percentGrade < 74 ){
    lettergrade.innerHTML = "C";
  } else if (percentGrade > 50 && percentGrade < 59 ){
    lettergrade.innerHTML = "D";
  } else {
    lettergrade.innerHTML = "F";
  }
}

function calculateGrade() {
  // Grabbing input

  // css1 = client side scripting 1
  let css1 = +document.getElementById("css1").value;
  // css2 = client side scripting 2
  let css2 = +document.getElementById("css2").value;
  // sp1 = structured programming 1
  let sp1 = +document.getElementById("sp1").value;
  // sp2 = structured programming 2
  let sp2 = +document.getElementById("sp2").value;
  // PA = project A
  let pA = +document.getElementById("pA").value;

  // Processing (getting sum then divide by 5 to find average)
  let average = (css1 + css2 + sp1 + sp2 + pA) / 5;

  getLetterGrade (document.getElementById("lettergradeCCS1"), css1)
  // getLetterGrade (css2)
  // getLetterGrade (sp1)
  // getLetterGrade (sp2)
  // getLetterGrade (pA)

  // Output
  document.getElementById("output").innerHTML = Math.round(average);
}
