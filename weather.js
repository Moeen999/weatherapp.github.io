const apiKey = "550cd299b9e456853819ff49119c4ed0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search Input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error=document.querySelector(".error");
const weather=document.querySelector(".weather")
async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(respone.status==404){
        error.style.display="block";
        weather.style.display="none";
    }
    else{
    var data = await respone.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%humidity";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h speed";
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain-removebg-preview.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "snow.png";
    }
   weather.style.display="block";
   error.style.display="none";
}
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

