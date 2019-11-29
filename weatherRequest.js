// Weather Request

function buildWeatherRequest(){
    let url = "http://api.openweathermap.org/data/2.5/weather?" +
    "id=" + geoid +
    "&appid=" + WEATHER_APP_ID;
    sendWeatherRequest(url);

}

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

            update(weather);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function update(weather){
    temp.innerHTML = weather.temp;
    description.innerHTML = weather.description;
   //icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png";
   //icon.src = './media/weather/22.png';

   addBgStyleString(weather);
   weatherForecastTable(weather);
}