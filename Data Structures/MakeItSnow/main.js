// GET CANVAS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

function randomInteger(range) {
  return Math.floor(Math.random() * range);
}

let allSnow = [];
let numberOfSnowflakes = 10;
let largestRadius = 8;
let fastestSpeed = 6;

for (let i = 0; i < numberOfSnowflakes; i++) {
  let newsnowflake = {
    x: randomInteger(cnv.width),
    y: 0,
    r: randomInteger(largestRadius),
    s: randomInteger(fastestSpeed),
  };
  allSnow.push(newsnowflake);
}

requestAnimationFrame(animate);

function animate() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  for (let i = 0; i < numberOfSnowflakes; i++) {
    currsnowflake = allSnow[i];

    if (currsnowflake.y > cnv.height + currsnowflake.r) {
      currsnowflake.y = 0;
      currsnowflake.x = randomInteger(cnv.width);
    } else {
      currsnowflake.y += currsnowflake.s;
    }

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(currsnowflake.x, currsnowflake.y, currsnowflake.r, 0, 2 * Math.PI);
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
