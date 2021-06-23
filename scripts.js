

// ONLOAD FUNCTION

window.onload = function() {

    //icon = document.getElementById("icon");
    // temp = document.getElementById("temp");
    // description = document.getElementById("description");

    
    buildCurrentWeatherRequest();
    const weatherReq = setInterval(buildCurrentWeatherRequest, 300000);

    buildWeatherForecastRequest();
    const weatherForecastReq = setInterval(buildWeatherForecastRequest, 300000);

    buildTrelloRequest();
    const trelloReq = setInterval(buildTrelloRequest, 300000);

    displayDateTime();
    const dateTime = setInterval(displayDateTime, 60000);


    // buildAirQualRequest();
    // const AirQualReq = setInterval(buildAirQualRequest, 300000);

}

