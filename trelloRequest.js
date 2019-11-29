// Trello Request

function buildTrelloRequest(){
    let url = "https://api.trello.com/1/boards/" +
    BOARD_ID + "/cards" +
    "?fields=name,url&key=" + TRELLO_API_KEY +
    "&token=" + TRELLO_TOKEN;
    
    sendTrelloRequest(url);

}
function sendTrelloRequest(url) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let data = JSON.parse(xmlhttp.responseText);
            let board = {};

            updateTrello(data);

        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}