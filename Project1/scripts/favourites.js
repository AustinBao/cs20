// testing
let favourites = ["Edmonton", "Beijing"];

document
  .getElementById("favcities")
  .addEventListener("change", function (event) {
    cityInput.value = event.target.value;
  });

for (let i = 0; i < favourites.length; i++) {
  let city = document.createElement("option");
  city.value = favourites[i];
  city.innerHTML = favourites[i];
  select.appendChild(city);
}

document.getElementById("submitbtn").addEventListener("click", getWeatherData);

star.addEventListener("click", function () {
  for (let i = 0; i < favourites.length; i++) {
    if (favourites[i] === cityInput.value) {
      favourites.splice(favourites.indexOf(cityInput.value));
    }
  }

  favourites.push(`${cityInput.value}`, cityInput.value);
});
