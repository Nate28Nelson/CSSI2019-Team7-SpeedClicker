function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
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

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;

function changeImg(){

  // document.getElementById("target").addEventListener("click", function(){
  // document.getElementById("target").remove();
//1.generate ran #
    var y = Math.floor(Math.random() * 1000);
    var x = Math.floor(Math.random() * 1000);
  //2.add 'px' to ran #(y,x)
var obj = document.getElementById("target");
  //height = x + 'px'
  obj.style.top = y + 'px';
  obj.style.left = x +'px';
  //width = y + 'px'

  //3.position: absolute
  //""style.margintop = height
  //""style.marginleft = width

  //4. fingers crossed
}




//   let target = document.getElementById("target")
//   console.log("You did it")
//
// });
//
// document.addEventListener("click", (e)=>{
//   console.log((e.x))
//   console.log((e.y))
// });
//
// top = y
// left = x
//TODO: Create function that creates element of same id and randomizes
// its location
