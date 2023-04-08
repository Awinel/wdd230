function displayResults(weatherData) {
    currentTemp.innerHTML = `Temperature: ${weatherData.main.temp.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentWeather.textContent = `Weather: ${desc}`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}`
}

fetch("https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=metric&appid=9f8b0bd6dd93dd0304dbd9b7c37628af")
.then(response => response.json())
.then(data => {
    
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    const iconsrc4 = `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`;

    document.querySelector(".temp1").innerHTML = `${(data.list[0].main.temp.toFixed(0))}`;
    document.querySelector(".temp2").innerHTML = `${(data.list[1].main.temp.toFixed(0))}`;
    document.querySelector(".temp3").innerHTML = `${(data.list[2].main.temp.toFixed(0))}`;
    document.querySelector(".temp4").innerHTML = `${(data.list[3].main.temp.toFixed(0))}`;

    document.querySelector(".icon1").setAttribute("src", iconsrc1);
    document.querySelector(".icon2").setAttribute("src", iconsrc2);
    document.querySelector(".icon3").setAttribute("src", iconsrc3);
    document.querySelector(".icon4").setAttribute("src", iconsrc4);

    document.querySelector(".weather").innerHTML = data.list[0].weather[0].main;
    document.querySelector(".hum").innerHTML = `${data.list[0].main.humidity}%`


    console.log(data)
})