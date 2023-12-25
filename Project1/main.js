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
  let data = await response.json();

  // Pass returned data to display weather function
  dislpayWeatherData(data);
}

function dislpayWeatherData(data) {
  // iterate the keys and values of each element in data.
  for ([key, val] of Object.entries(data)) {
    console.log(key, val);
  }
  document.getElementById("weatherIcon").src =
    "https://openweathermap.org/img/wn/10d@2x.png";
}
