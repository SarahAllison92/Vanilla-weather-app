//Weather API 
function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let discriptionElemenet = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let feelsLike = document.querySelector("#feels-like");
  let windSpeed = document.querySelector("#windSpeed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  discriptionElemenet.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  feelsLike.innerHTML = Math.round(response.data.main.feels_like);
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "ebc2487298b0e7c6cfcfbfe23bd11495";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

// Date/Time Section

