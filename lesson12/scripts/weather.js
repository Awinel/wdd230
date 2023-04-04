const currentTemp = document.querySelector(".temp")
const weatherIcon = document.querySelector(".icon")
const currentWeather = document.querySelector(".weather")
const humidity = document.querySelector(".hum")


const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=metric&APPID=9f8b0bd6dd93dd0304dbd9b7c37628af"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }
    
    apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `Temperature: ${weatherData.main.temp.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentWeather.textContent = `Weather: ${desc}`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`
}