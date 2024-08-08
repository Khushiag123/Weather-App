const apiKey = "9bf03420bdd63f9fdd28137dddbb02a4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";

        document.body.style.backgroundImage = "url('https://s1.1zoom.me/b4842/276/USA_Houses_Roads_Puerto_Rico_San_Juan_Street_541558_1920x1080.jpg" + city + "')";

    } catch (error) {
        alert("Location not found"); 
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})