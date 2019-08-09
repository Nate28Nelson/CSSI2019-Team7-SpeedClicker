var i = 20;
const timer = document.querySelector("#timer");

function startTimer() {
  var countdownTimer = setInterval(function() {
        //console.log(i);
        timer.innerHTML = i;
        i = i - 1;
        if (i <= 0) {
            clearInterval(countdownTimer);
            timer.innerHTML = "Game Over";
            document.getElementById("target").remove();
        }
    }, 1000);
}

startTimer();

const scoreText = document.querySelector('#score');
var score = 0;

function changeImg(){

  // document.getElementById("target").addEventListener("click", function(){
  // document.getElementById("target").remove();
//1.generate ran #
    var y = Math.floor(Math.random() * 800);
    var x = Math.floor(Math.random() * 925);
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

    score++;
    scoreText.innerHTML = score;
    console.log(score);
}
