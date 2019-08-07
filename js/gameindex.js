var i = 59;
const timer = document.querySelector("#timer");

function startTimer() {
  var countdownTimer = setInterval(function() {
        console.log(i);
        timer.innerHTML = i;
        i = i - 1;
        if (i <= 0) {
            clearInterval(countdownTimer);
            timer.innerHTML = "Game Over";
        }
    }, 1000);
}

startTimer();



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
