// Listens to btn click to run function
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
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en&pop=metric&rain=metric&clouds=metric`
  );
  // waits for response then parses data as a JSON for later use
  let data = await response.json();

  // So the info isnt added on top of each other multiple times
  leftdisplay.innerHTML = "";
  middisplay.innerHTML = "";
  rightdisplay.innerHTML = "";
  document.getElementById("rain").innerHTML = "";
  document.getElementById("snow").innerHTML = "";

  // Pass returned data to display weather function
  dislpayWeatherData(data);
}

function dislpayWeatherData(data) {
  // Checks if the data returned is useable (ie. checks if city exists)
  if (data.cod === "404") {
    document.getElementById("result").innerHTML = "City Not Found";
    document.getElementById("weatherIcon").src = "weatherapi.png";
  }

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
    desc[i] = desc[i][0].toUpperCase() + desc[i].slice(1);
  }
  desc = desc.join(" ");
  document.getElementById("result").innerHTML = desc;

  // change background image depending on current weather. We grab the "html" element to change the background.
  let main = data.weather[0].main;
  let html = document.documentElement;
  html.style.backgroundImage = `url(backgrounds/${main}.png)`;
  html.style.backgroundSize = "cover";

  //Adding time of request and also country. Converts Unix UTC time to normal time
  let dateOBJ = new Date(data.dt * 1000);
  let time = dateOBJ.toLocaleTimeString("en-US");
  let date = dateOBJ.toLocaleDateString("en-US");
  document.getElementById(
    "times"
  ).innerHTML = `Time of data collection: ${time}, ${date}`;

  // Main Info
  // Loop through all keys and add their values to their respective columns
  for ([key, val] of Object.entries(data.main)) {
    if (key === "temp") {
      leftdisplay.innerHTML += `<article><h3>Temperature</h3> <p>${val}°C</p> <hr> </article>`;
    } else if (key === "feels_like") {
      leftdisplay.innerHTML += `<article><h3>Feels Like</h3> <p>${val}°C</p> <hr> </article>`;
    } else if (key === "temp_max") {
      middisplay.innerHTML += `<article><h3>Max Temp.</h3> <p>${val}°C</p> <hr> </article>`;
    } else if (key === "temp_min") {
      middisplay.innerHTML += `<article><h3>Min Temp.</h3> <p>${val}°C</p> <hr> </article>`;
    } else if (key === "pressure") {
      rightdisplay.innerHTML += `<article><h3>Pressure</h3> <p>${val} hPa</p><hr> </article>`;
    } else if (key === "humidity") {
      rightdisplay.innerHTML += `<article><h3>Humidity</h3> <p>${val} %</sup></p> <hr> </article>`;
    }
  }

  // Extra info
  leftdisplay.innerHTML += `<article><h3>Wind Speed</h3> <p>${data.wind.speed} m/s</p> </article>`;
  middisplay.innerHTML += `<article><h3>Gust</h3> <p>${data.wind.gust} m/s</p> </article>`;
  rightdisplay.innerHTML += `<article><h3>Cloudiness</h3> <p>${data.clouds.all} %</p> </article>`;

  if (data.weather[0].main === "Rain") {
    document.getElementById(
      "rain"
    ).innerHTML = `Precipitation volume in 1 hour: ${data.rain["1h"]} mm`;
  }

  if (data.weather[0].main === "Snow") {
    document.getElementById(
      "snow"
    ).innerHTML = `Snow volume in 1 hour: ${data.snow["1h"]} mm`;
  }
}
