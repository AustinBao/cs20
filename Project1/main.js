document.getElementById("submitbtn").addEventListener("click", getWeatherData);

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
  let mainWeatherInfo = [];
  for ([key, val] of Object.entries(data.main)) {
    mainWeatherInfo.push(val);
    document.getElementById("mainDisplay").innerHTML += `<p>${key} ${val}</p>`;
  }
  console.log(mainWeatherInfo);

  // Wind

  // Sys (Country)

  // name
}
