const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl  = document.getElementById('seconds')
const newYears = '1 jan 2022';

function Countdown(){

 const newYearsDate  =  new Date(newYears);
 const currentDate = new Date();

 const totalSeconds = (newYearsDate - currentDate)/1000;  //this difference will be in milliseconds that's why we divide it by 1000. 
 
 const days = Math.floor(totalSeconds/3600/24);
 const hours = Math.floor(totalSeconds/3600) % 24;
 const mins = Math.floor(totalSeconds/60) % 60;
 const seconds = Math.floor(totalSeconds) % 60;

 daysEl.innerHTML = days;
 hoursEl.innerHTML = formatTime(hours);
 minsEl.innerHTML = formatTime(mins);
 secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
 return  time < 10 ? `0${time}` : time;
}
Countdown();
setInterval(Countdown,1000);

