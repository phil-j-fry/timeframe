// open weather map
WEATHER_APP_ID = "d05bd3c5f2e4d99dd3bafe257acc3f4a";
geoid = "5391997";

//trello
TRELLO_API_KEY = "da21954df03becdc40f5f596e579b325";
TRELLO_TOKEN = "69a4add59b9445ad65ec6dc887b3dc6053cf226b7bb5ffd86a80138010be52c2";
BOARD_ID = "5db4a8b3aa5a014c94e047a5";

//AIR QUALITY
ZIP = "94103"
AREA_DIST = '25'
AIRQUAL_API = "676B9282-9148-4E86-B61F-101C3C2C4215"


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

