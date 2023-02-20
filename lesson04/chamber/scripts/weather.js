const api = {
    key: "9f8b0bd6dd93dd0304dbd9b7c37628af",
    base: "https://api.openweathermap.org/data/2.5/"
}
const currentWeather = fetch(`${api.base}weather?q=Vallenar&units=metric&APPID=${api.key}`)
.then(weather => weather.json()).then(displayResults);

function displayResults(weather) {
    // console.log(weather);
    let city = document.querySelector("#weather .city");
    city.textContent = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();

    let temp = document.querySelector("#weather .temp");
    temp.textContent = `${Math.round(weather.main.temp)}°C`;

    let weather_el = document.querySelector("#weather .weather");
    weather_el.textContent = weather.weather[0].main;

	let windChill = weather.wind.speed

	let convertion = (windChill * 3600) / 1000;

    let wind = document.querySelector("#weather .windChill");
    wind.textContent = `${Math.round(convertion)} k/m`;
	
}