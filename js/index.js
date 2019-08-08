// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);
//
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = minutes + ":" + seconds;
//
//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// };
// var ScoreBoard = function (currentScore) {
//   this.currentScore = currentScore;
//   console.log('ScoreBoard created');
// };
//
// ScoreBoard.prototype.addPoint = function() {
//   console.log(this.currentScore = this.currentScore + 1);
// };
