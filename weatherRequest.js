// Weather Requests


// Current Weather

function buildCurrentWeatherRequest(){
    let url = "http://api.openweathermap.org/data/2.5/weather?" +
    "id=" + geoid +
    "&appid=" + WEATHER_APP_ID;
    sendWeatherRequest(url);

}


// Send Request

function sendWeatherRequest(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let data = JSON.parse(xmlhttp.responseText);
            let weather = {};
           
           // console.log(data);

            weather.main = (data.weather[0].main);
            weather.description = toTitleCase(data.weather[0].description);
            weather.icon = data.weather[0].icon;
            weather.temp = K2F(data.main.temp);

            updateCurrent(weather);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// update Current

function updateCurrent(weather){
    temp.innerHTML = weather.temp;
    description.innerHTML = weather.description;
   //icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png";
   //icon.src = './media/weather/22.png';

   addBgStyleString(weather);
}


////////////////////////////////////////////////////////////////////////////////

// Forecast

function buildWeatherForecastRequest(){
    let url = "http://api.openweathermap.org/data/2.5/forecast?" +
    "id=" + geoid +
    "&appid=" + WEATHER_APP_ID;
    sendForecastRequest(url);

}

function sendForecastRequest(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let data = JSON.parse(xmlhttp.responseText);
            let weather = {};
           

            weather.list = (data.list);

            console.log(weather);

            updateForecast(weather);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function updateForecast(weather){

    updateTableDays()
    updateTableForecast(weather)
    
}

function updateTableDays(){
    document.getElementById("weather-day2").innerHTML = daysArr[calCurrentView[1].getDay()];
    document.getElementById("weather-day3").innerHTML = daysArr[calCurrentView[2].getDay()];
    document.getElementById("weather-day4").innerHTML = daysArr[calCurrentView[3].getDay()];
}

function updateTableForecast(weather){

    let todayMin = K2F(weather.list[0].main.temp_min)
    let todayMax = K2F(weather.list[0].main.temp_max)
    document.getElementById("weather-forecast-today").innerHTML = todayMin + "/" + todayMax;

    let min2 = K2F(weather.list[4].main.temp_min)
    let max2 = K2F(weather.list[4].main.temp_max)
    document.getElementById("weather-forecast-day2").innerHTML = min2 + "/" + max2;

    let min3 = K2F(weather.list[12].main.temp_min)
    let max3 = K2F(weather.list[12].main.temp_max)
    document.getElementById("weather-forecast-day3").innerHTML = min3 + "/" + max3;

    let min4 = K2F(weather.list[20].main.temp_min)
    let max4 = K2F(weather.list[20].main.temp_max)
    document.getElementById("weather-forecast-day4").innerHTML = min4 + "/" + max4;
}