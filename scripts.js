// open weather map
APPID = "d05bd3c5f2e4d99dd3bafe257acc3f4a";

// sf
geoid = "3669881";

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

function buildRequest(){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
    "id=" + geoid +
    "&appid=" + APPID;
    return url;

}

function toTitleCase(inputText){
    var text = inputText;
        text = text.toLowerCase()
        .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' '); 
    return text;
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};

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
    apiUrl = buildRequest();
    weather = sendRequest(apiUrl);

    var dt = new Date();
    var rawMin = dt.getMinutes();
    var time = dt.getHours() + ":" + rawMin.toPrecision(2);
    var currentDay = daysArr[dt.getDay()] + " " + dt.getDate() + " " + monthsArr[dt.getMonth()];
    document.getElementById("currentDate").innerHTML = currentDay;



    var span = document.getElementById('currentTime');
    // setInterval(time, 1000);
    
    



}

