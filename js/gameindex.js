document.getElementById('timer').innerHTML = 01 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

const target = document.querySelector("#target")
target.addEventListener("click", function(){
  target.remove();

  let y = Math.floor((Math.random() * 100))
  let x = Math.floor((Math.random() * 100))

});

document.addEventListener("click", (e)=>{
  console.log((e.x))
  console.log((e.y))
});

//TODO: Create function that creates element of same id and randomizes
// its location
