document.getElementById("submitbtn").addEventListener("click", weather);

function weather() {
  let city = document.getElementById("city").value;
  let apiKey = "063bdab6bd3f0e17b1afe04736c947ff";

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  console.log(url);
}
