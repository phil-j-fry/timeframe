function updateTrello(data){
    var board = {};

    board.card1 = data[0].name;
    board.card2 = data[1].name;
    board.card3 = data[2].name;


    console.log(data[0].name);

    document.getElementById("trello-item-1").innerHTML = board.card1;
    document.getElementById("trello-item-2").innerHTML = board.card2;   
    document.getElementById("trello-item-3").innerHTML = board.card3;

}