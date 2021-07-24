"use strict"

var hh = 0;
var mn = 0;
var ss = 0;

var tempo = 1000; //Quantos milésemos valem 1 segundo?
var cron;

//
function start()
{
    cron = setInterval(() => { timer(); }, tempo);
}

//
function pause()
{
    clearInterval(cron);
}

//
function stop()
{
    clearInterval(cron);
    hh = 0;
    mn = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00'
}

function timer() 
{
    ss++;

    if(ss == 60){
        ss = 0;
        mn++;

        if(mn == 60) {
            mn = 0;
            hh++;
        } 
    }
    
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mn < 10 ? '0' + mn : mn) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}