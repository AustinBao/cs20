// Button Designer BY AUSTIN

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let bgHexColor = document.getElementById("color-in").value;
  let btnText = document.getElementById("text-in").value;

  // Convert Hex Color to RGB (allows us to use RGB)
  let red = parseInt(bgHexColor.substring(1, 3), 16);
  let green = parseInt(bgHexColor.substring(3, 5), 16);
  let blue = parseInt(bgHexColor.substring(5, 7), 16);

  // Verify Inputs & Conversions in Console
  console.log(`bgHexColor: ${bgHexColor}`);
  console.log(`btnText: ${btnText}`);
  console.log(`red: ${red}`);
  console.log(`green: ${green}`);
  console.log(`blue: ${blue}`);

  // SET TEXT INSIDE BUTTON
  document.getElementById("demo-btn").innerHTML = btnText;
  // SET BACKGROUND COLOR OR BUTTON
  document.getElementById("demo-btn").style.backgroundColor = bgHexColor;
  // CALC THE BRIGHTNESS OF THE COLOR
  let brightness = Math.sqrt(
    0.299 * red ** 2 + 0.587 * green ** 2 + 0.114 * blue ** 2
  );
  // DETERMINE WHAT COLOR THE TEXT INSIDE THE BUTTON SHOULD BE BASED OFF THE BRIGHTNESS
  if (brightness > 180) {
    document.getElementById("demo-btn").style.color = "black";
  } else {
    document.getElementById("demo-btn").style.color = "white";
  }
}
