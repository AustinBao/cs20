// Triangle Perimeter Assignment Start Code

document.getElementById("calculate").addEventListener("click", getPerimeter);

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

function getPerimeter() {
  let xA = +document.getElementById("xA").value;
  let yA = +document.getElementById("yA").value;
  let xB = +document.getElementById("xB").value;
  let yB = +document.getElementById("yB").value;
  let xC = +document.getElementById("xC").value;
  let yC = +document.getElementById("yC").value;

  let ab = dist(xA, yA, xB, yB);
  let ac = dist(xA, yA, xC, yC);
  let bc = dist(xB, yB, xC, yC);

  document.getElementById("ab").innerHTML = ab;
  document.getElementById("ac").innerHTML = ac;
  document.getElementById("bc").innerHTML = bc;

  document.getElementById("perimeter").innerHTML = ab + ac + bc;
}
