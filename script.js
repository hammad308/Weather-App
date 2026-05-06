const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");
const getWeatherBtn = document.getElementById("get-weather-btn");
const cityOptions = document.getElementById("weather-cities");
const weatherElements=document.querySelector(".Weather-showing-elements");
async function getWeather(city) {
    try {
        const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
        return await response.json();
    }
    catch (error) {
        console.log("Error: " + error);
        return undefined;
    }
}
async function showWeather(city) {
  try {
    const data = await getWeather(city);

    if (!data || data===undefined) {
      alert("Something went wrong, please try again later");
      return;
    }

    weatherIcon.src = data.weather?.[0]?.icon ?? "";

    mainTemperature.textContent =
      data.main?.temp !== undefined ? data.main.temp + " °C" : "N/A";
    feelsLike.textContent="Feels Like: ";
    feelsLike.textContent +=
      data.main?.feels_like !== undefined ? data.main.feels_like + " °C" : "N/A";

    humidity.textContent="Humidity: "
    humidity.textContent +=
      data.main?.humidity !== undefined ? data.main.humidity + "%" : "N/A";

     wind.textContent="Wind: " 
    wind.textContent +=
      data.wind?.speed !== undefined ? data.wind.speed + " m/s" : "N/A";

    windGust.textContent="Gusts: "
    windGust.textContent +=
      data.wind?.gust !== undefined ? data.wind.gust + " m/s" : "N/A";

    weatherMain.textContent = data.weather?.[0]?.main ?? "N/A";
    locationEl.textContent = data.name ?? "N/A";

  } catch (error) {
    alert("Something went wrong, please try again later");
  }
}
getWeatherBtn?.addEventListener("click", () => {
    if (!cityOptions.value) return;
    weatherElements.hidden=false;
    showWeather(cityOptions.value);
});