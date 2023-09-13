const API_KEY = "71cf9acaa4071375d23291505c76e15f";

let dataContainer = document.querySelector("#data");

let searchInput = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");

function getWeatherData({ city }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((res) => {
      if (res.cod == 404) return alert("La ciudad no existe");

      dataContainer.innerHTML = `
        <div id="city">
          <h2 id="city-title">${res.name}, ${res.sys.country}</h2>
        </div>
        <div id="information">
          <span class="span-info">Temperature: <b>${res.main.temp}ºC</b></span>
          <span class="span-info">Max Temperature: <b>${res.main.temp_max}ºC</b></span>
          <span class="span-info">Min Temperature: <b>${res.main.temp_min}ºC</b></span>
          <span class="span-info">Thermal Sensation: <b>${res.main.feels_like}ºC</b></span>
          <span class="span-info">Description: <b>${res.weather[0].description}</b></span>
          <span class="span-info">Humidity: <b>${res.main.humidity}%</b></span>
          <span class="span-info">Pressure: <b>${res.main.pressure} hPa</b></span>
        </div>
      `;
    })
    .catch((err) => {
      return err;
    });
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value.length < 2)
    return alert("El nombre de la ciudad no es correcto");

  getWeatherData({ city: searchInput.value });
});
