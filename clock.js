var handleid = 0;
var h1 = document.getElementById("time");
var h3 = document.getElementById("ddd");
var go = document.getElementById("go");
var stop = document.getElementById("stop");
var back = document.getElementById("backcolor")
var text = document.getElementById("textcolor")
var backc = document.getElementsByClassName("clock")

function getTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();
    var time = `${hour}:${minutes}:${seconds}`
    var day = `${y}년 ${m}월 ${d}일`
    h1.textContent = time;
    h3.textContent= day;
}

go.onclick = function(){
    if(handleid == 0){
        handleid = setInterval(getTime,1000);
    }
}

stop.onclick = function(){
    clearInterval(handleid);
    handleid = 0;
}
let j = 0;
back.onclick = function(){
   
    const color = ["#FF0000", "#FF7F00", "#FFFF00", "#008000", "#4AA8D8"];

    if(j>=color.length){
        j=0;
    }
    backc[0].style.backgroundColor=color[j];
    j++;
}
let i = 0;
text.onclick = function(){
    const color = ["#FF0000", "#FF7F00", "#FFFF00", "#008000", "#4AA8D8"];

    if(i>=color.length){
        i=0;
    }
    h1.style.color=color[i];
    h3.style.color=color[i];
    i++;
}
