// Point in Circle

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseX;
let mouseY;

function ptInCircle(x1, y1, x, y, r) {
  let distance = Math.sqrt((x1 - x) ** 2 + (y1 - y) ** 2);
  if (distance < r) {
    return true;
  } else {
    return false;
  }
}

function newRandomCircle() {
  return (blackCircle = {
    x: Math.random() * cnv.width,
    y: Math.random() * cnv.height,
    r: Math.random() * 50 + 10,
  });
}

// Helper Functions
function fillCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

blackCircle = newRandomCircle();

function draw() {
  // LOGIC - test if mouse in circles
  if (ptInCircle(mouseX, mouseY, 150, 150, 100)) {
    document.body.style.backgroundColor = "red";
  } else if (ptInCircle(mouseX, mouseY, 475, 125, 60)) {
    document.body.style.backgroundColor = "green";
  } else if (ptInCircle(mouseX, mouseY, 350, 275, 40)) {
    document.body.style.backgroundColor = "blue";
  } else if (
    ptInCircle(mouseX, mouseY, blackCircle.x, blackCircle.y, blackCircle.r)
  ) {
    document.body.style.backgroundColor = "white";
    newRandomCircle();
  }

  // DRAW - draw circles
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "red";
  fillCircle(150, 150, 100);

  ctx.fillStyle = "green";
  fillCircle(475, 125, 60);

  ctx.fillStyle = "blue";
  fillCircle(350, 275, 40);

  ctx.fillStyle = "black";
  fillCircle(blackCircle.x, blackCircle.y, blackCircle.r);

  requestAnimationFrame(draw);
}
