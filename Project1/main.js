document.getElementById("submitbtn").addEventListener("click", getWeatherData);

let leftdisplay = document.getElementById("mainDisplayLeft");
let middisplay = document.getElementById("mainDisplayMid");
let rightdisplay = document.getElementById("mainDisplayRight");

async function getWeatherData() {
  // Get users city
  let city = document.getElementById("city").value;
  // ApiKey from my weather data provider (https://openweathermap.org/api)
  let apiKey = "063bdab6bd3f0e17b1afe04736c947ff";

  // Calling Api and return in form of JSON file
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  // waits for response then parses data as a JSON for later use
  let data = await response.json();

  leftdisplay.innerHTML = "";
  middisplay.innerHTML = "";
  rightdisplay.innerHTML = "";

  // Pass returned data to display weather function
  dislpayWeatherData(data);
}

function dislpayWeatherData(data) {
  // iterate the keys and values of each element in data.
  for ([key, val] of Object.entries(data)) {
    console.log(key, val);
  }
  // Weather
  // display image depending on weatherAPI's provided icons
  let icon = data.weather[0].icon;
  document.getElementById(
    "weatherIcon"
  ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // change the first letter of all words in the description to uppercase and display ouput.
  let desc = data.weather[0].description.split(" ");
  for (let i = 0; i < desc.length; i++) {
    desc[i] = desc[i][0].toUpperCase() + desc[i].substr(1);
  }
  desc = desc.join(" ");
  document.getElementById("result").innerHTML = desc;

  // change background image depending on current weather. We grab the "html" element to change the background.
  let main = data.weather[0].main;
  let html = document.documentElement;
  html.style.backgroundImage = `url(backgrounds/${main}.png)`;
  html.style.backgroundSize = "cover";

  // Main

  for ([key, val] of Object.entries(data.main)) {
    if (key === "temp") {
      leftdisplay.innerHTML += `<article><h3>Temperature</h3> <p>${val}°C</p> <hr> </article>`;
    } else if (key === "feels_like") {
      leftdisplay.innerHTML += `<article><h3>Feels Like</h3> <p>${val}°C</p></article>`;
    } else if (key === "temp_max") {
      middisplay.innerHTML += `<article><h3>Max Temperature</h3> <p>${val}°C</p></article>`;
    } else if (key === "temp_min") {
      middisplay.innerHTML += `<article><h3>Min Temperature</h3> <p>${val}°C</p><hr> </article>`;
    } else if (key === "pressure") {
      rightdisplay.innerHTML += `<article><h3>Pressure</h3> <p>${val} mbar</p><hr> </article>`;
    } else if (key === "humidity") {
      rightdisplay.innerHTML += `<article><h3>Humidity</h3> <p>${val} g/m<sup>3</sup></p></article>`;
    }
  }

  // Wind

  // Sys (Country)

  // name
}
