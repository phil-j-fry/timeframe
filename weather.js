

// const numWeatherTypes = 14;

const weatherTypes = {

    Thunderstorm: {

        iconDay: "./media/weather/thunderstorm.png",
        iconNight: "./media/weather/night-thunderstorm",
        bgDayImage: 'url("")',
        bgNightImage: 'url("")'

    },

    Rain: {

        iconDay: "./media/weather/rain.png",
        iconNight: "./media/weather/night-rain.png",
        bgDayImage: 'url("https://upload.wikimedia.org/wikipedia/commons/2/29/More_freesia_in_the_rain.jpg")',
        bgNightImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e794bc66-05ab-4238-8eb0-f538e63e8898/d31lmit-5b30477b-d70d-460f-bf4f-31e2cac91261.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3OTRiYzY2LTA1YWItNDIzOC04ZWIwLWY1MzhlNjNlODg5OFwvZDMxbG1pdC01YjMwNDc3Yi1kNzBkLTQ2MGYtYmY0Zi0zMWUyY2FjOTEyNjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.grOVVkhq2oSrzhv3hp5tN7xaA16mr9uKI63OUr4HntU")'

    },
//     mist:{
//         icon: 
//         bgimage: 
//     }
    Smoke:{
        iconDay: "./media/weather/fire_smoke.png",
        iconNight: "./media/weather/fire_smoke.png",
        bgNightImage:'url("https://upload.wikimedia.org/wikipedia/commons/f/f8/THE_RED-ORANGE_SMOKE_CHARACTERISTIC_OF_THE_STEEL_PLANT_BLURS_THE_CITY_SKYLINE_-_NARA_-_545499.jpg")',
        bgDayImage: 'url("https://upload.wikimedia.org/wikipedia/commons/a/ab/Smoke_from_wildfire_on_Angel_Island_blankets_San_Franciscon.jpg")'
    },
    Haze:{
        iconDay: "./media/weather/fire_smoke.png",
        iconNight: "./media/weather/fire_smoke.png",
        bgNightImage:'url("https://upload.wikimedia.org/wikipedia/commons/f/f8/THE_RED-ORANGE_SMOKE_CHARACTERISTIC_OF_THE_STEEL_PLANT_BLURS_THE_CITY_SKYLINE_-_NARA_-_545499.jpg")',
        bgDayImage: 'url("https://upload.wikimedia.org/wikipedia/commons/a/ab/Smoke_from_wildfire_on_Angel_Island_blankets_San_Franciscon.jpg")'
    },
//     dust:{
//         icon: 
//         bgimage: 
//     }
    Fog:{
        iconDay: "./media/weather/foggy.png",
        iconNight: "./media/weather/cloudy-night.png",
        bgDayImage: 'url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(11).jpg")',
        bgNightImage: 'url("https://upload.wikimedia.org/wikipedia/commons/2/29/Foggy_night_at_Pikisaari%2C_Tornio%2C_Finland%2C_2015_May.jpg")',
        bgMidImage: 'url("https://upload.wikimedia.org/wikipedia/commons/2/2f/SF_skyline_%28702056020%29.jpg")'
    },
//     sand:{
//         icon: 
//         bgimage: 
//     }
//     dust:{
//         icon: 
//         bgimage: 
//     }
//     ash:{
//         icon: 
//         bgimage: 
//     }
//     squall:{
//         icon: 
//         bgimage: 

//     }
//     tornado:{
//         icon: 
//         bgimage: 
//     }

    Clear:{

        iconDay: "./media/weather/clear.png",
        iconNight: "./media/weather/clear-night.png",
        bgDayImage: 'url("https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg")',
        bgNightImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/7f/Clear_Night_%28227774827%29.jpeg")'

    },
    Clouds: {

        iconDay: "./media/weather/cloudy.png",
        iconNight: "./media/weather/cloudy-night.png",
        bgDayImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ed/Cloudy_day_in_Loch_Sport.jpg")',
        bgNightImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cloudy_Night_Sky_%2817677878458%29.jpg/1600px-Cloudy_Night_Sky_%2817677878458%29.jpg")'

    }
};



function addBgStyleString(weather) {
    let dateObj = new Date();
    let hours = dateObj.getHours()

    //console.log(dt.getHours())
    // console.log(weather)

    let day;

    if(hours > 18 || hours < 6 ){
        day = false;
    } else if ( hours >= 6 && hours <=18 ){
        day = true;
    }
    
    // console.log("day: " + day)

    weatherType = weather.main;
    // weatherType = "Smoke"

    // console.log(weatherTypes[weatherType]);

    document.getElementById("icon");
    
    if (day == true){ 
        document.body.style.backgroundImage = weatherTypes[weatherType]['bgDayImage'];
        icon.src = weatherTypes[weatherType]['iconDay'];

    } else if (day == false){
        document.body.style.backgroundImage = weatherTypes[weatherType]['bgNightImage'];
        icon.src = weatherTypes[weatherType]['iconNight'];
    };

};


function weatherForecastTable(weather) {

    document.getElementById("weather-day2").innerHTML = daysArr[calCurrentView[1].getDay()];
    document.getElementById("weather-day3").innerHTML = daysArr[calCurrentView[2].getDay()];
    document.getElementById("weather-day4").innerHTML = daysArr[calCurrentView[3].getDay()];


}



