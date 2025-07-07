const apiKey = "0db036b9e960a28e60f8b1a2a116dc96";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const tempElement = document.getElementById("temp");
const placeElement = document.getElementById("place");
const humPerElement = document.getElementById("humPer");
const windSpeedElement = document.getElementById("windSpeed");
const searchInput = document.getElementById("txt");
const searchBtn = document.getElementById("btn");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }
        
    const data = await response.json();
    console.log(data);

    placeElement.textContent = data.name;
    tempElement.textContent = `${Math.round(data.main.temp)}°c`;
    humPerElement.textContent = `${data.main.humidity}%`;
    windSpeedElement.textContent = `${data.wind.speed} km/h`;
  } catch (error) {
    alert(error.message);
    placeElement.textContent = "City not found";
    tempElement.textContent = "--°c";
    humPerElement.textContent = "--%";
    windSpeedElement.textContent = "-- km/h";
  }
}

searchBtn.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = searchInput.value.trim();
    if (city) {
      checkWeather(city);
    } else {
      alert("Please enter a city name");
    }
  }
});

checkWeather("Kolkata");


