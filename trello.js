function updateTrello(data){
    var board = {};

    for(i = 0; i< Object.keys(data).length; i++){
        j = i+1;
        document.getElementById("trello-item-" + j).innerHTML = data[i].name;
   }
}
