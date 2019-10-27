// open weather map
WEATHER_APP_ID = "d05bd3c5f2e4d99dd3bafe257acc3f4a";
// sf
geoid = "3669881";

//trello
TRELLO_API_KEY = "da21954df03becdc40f5f596e579b325";
TRELLO_TOKEN = "69a4add59b9445ad65ec6dc887b3dc6053cf226b7bb5ffd86a80138010be52c2";
BOARD_ID = "5db4a8b3aa5a014c94e047a5";

let daysArr = 
["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

let monthsArr = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}


function update(weather){
    temp.innerHTML = weather.temp;
    description.innerHTML = weather.description;
   //icon.src = "https://openweathermap.org/img/w/" + weather.icon + ".png";
   //icon.src = './media/weather/22.png';

   addBgStyleString(weather);
}
function toTitleCase(inputText){
    var text = inputText;
        text = text.toLowerCase()
        .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' '); 
    return text;
}

// Weather Request

function buildWeatherRequest(){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
    "id=" + geoid +
    "&appid=" + WEATHER_APP_ID;
    return url;

}

function sendWeatherRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            //console.log(weather);

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



// Trello Request

function buildTrelloRequest(){
    var url = "https://api.trello.com/1/boards/" +
    BOARD_ID + "/cards" +
    "?fields=name,url&key=" + TRELLO_API_KEY +
    "&token=" + TRELLO_TOKEN;
    
    return url;

}
function sendTrelloRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var board = {};
            
            //console.log(data[0].name);
            updateTrello(data);
            // weather.main = (data.weather[0].main);
            // weather.description = toTitleCase(data.weather[0].description);
            // weather.icon = data.weather[0].icon;
            // weather.temp = K2F(data.main.temp);

            // update(weather);
            // console.log(boardCard);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


//Date Time

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes();
document.getElementById("currentTime").innerHTML = time;
document.getElementById("currentDate").innerHTML = dt.getDay();



function K2F(k){
    return Math.floor(9/5 * (k-273) + 32);

}



// function time() {
//     var d = new Date();
//     var s = d.getSeconds();
//     var m = d.getMinutes();
//     var h = d.getHours();
//     span.textContent = h + ":" + m + ":" + s;
//   }



window.onload = function() {

    //icon = document.getElementById("icon");
    temp = document.getElementById("temp");
    description = document.getElementById("description");
    apiUrl = buildWeatherRequest();
    weather = sendWeatherRequest(apiUrl);

    var dt = new Date();
    var rawMin = dt.getMinutes();
    var time = dt.getHours() + ":" + rawMin.toPrecision(2);
    var currentDay = daysArr[dt.getDay()] + " " + dt.getDate() + " " + monthsArr[dt.getMonth()+1];
    document.getElementById("currentDate").innerHTML = currentDay;



    var span = document.getElementById('currentTime');
    // setInterval(time, 1000);
    
    
    trelloUrl = buildTrelloRequest();
    sendTrelloRequest(trelloUrl);




}

