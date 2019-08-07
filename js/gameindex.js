document.getElementById('timer').innerHTML = 00 + ":" + 10;

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec = 0) {sec = "00"};
  return sec;
}



function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = timeArray[1];
console.log(timeArray);
  // var s = checkSecond((timeArray[1] - 1));
  if(m>0&&s==0){m=m-1; s=59};
  if(s!=0){s=s-1}
  if(m==0&&s=="00"){alert('game over')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}



startTimer();

document.getElementById("target").addEventListener("click", function(){
  document.getElementById("target").remove();

  let y = Math.floor((Math.random() * 100))
  let x = Math.floor((Math.random() * 100))

});

document.addEventListener("click", (e)=>{
  console.log((e.x))
  console.log((e.y))
});

//TODO: Create function that creates element of same id and randomizes
// its location
