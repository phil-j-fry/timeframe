let daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let calDayHTML = ["calDay1", "calDay2", "calDay3", "calDay4", "calDay5"]
let calNumHTML = ["calNum1", "calNum2", "calNum3", "calNum4", "calNum5"]



function displayDateTime(){

    var dt = new Date();

    // set calCurrentView array

    const calDayCount = 5
    let calCurrentView = []
    let nextDay = new Date(dt)


    for (i=0; i < calDayCount; i++){
        this["day"+i] = new Date(nextDay);
        calCurrentView[i] = this["day"+i]
        nextDay.setDate(nextDay.getDate()+1)
    }


    // get and set current day and time in DOM

    var time = dt.getHours() + ":" + ((dt.getMinutes()<10?'0':'') + dt.getMinutes());
    var currentDay = daysArr[dt.getDay()] + " " + dt.getDate() + " " + monthsArr[dt.getMonth()+1];

    document.getElementById("currentDate").innerHTML = currentDay;
    document.getElementById("currentTime").innerHTML = time;


    // replace in DOM

    for (i=0; i < calDayCount; i++){
        document.getElementById(calNumHTML[i]).innerHTML = (calCurrentView[i].getDate());
        document.getElementById(calDayHTML[i]).innerHTML = daysArr[calCurrentView[i].getDay()];
    }

}
