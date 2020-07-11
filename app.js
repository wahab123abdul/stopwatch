var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hoursheading = document.getElementById("hours");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

var interval;

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secheading.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++
        minheading.innerHTML = min;
        sec = 0;
    }else if(min >= 60){
        hours++
        hoursheading.innerHTML = hours;
        min = 0;
    }
}

function start(){
    interval = setInterval(timer,10)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    hours = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hoursheading.innerHTML = hours
    minheading.innerHTML = min
    secheading.innerHTML = sec
    msecheading.innerHTML = msec
    pause()
}