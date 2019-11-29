// Air Quality API

function buildAirQualRequest(){
    // var url = "http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&" +
    // "zipCode=" + ZIP +
    // "&distance="+ AREA_DIST + 
    // "&API_KEY="+ AIRQUAL_API;

    url = "http://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=94103&distance=25&API_KEY=676B9282-9148-4E86-B61F-101C3C2C4215";

    sendAirQualRequest(url);

}
function sendAirQualRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
        
            updateAirQual(data);

        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.setRequestHeader("Accept", 'application/json');
    xmlhttp.setRequestHeader('Access-control-allow-origin', '*');
    xmlhttp.send();

}