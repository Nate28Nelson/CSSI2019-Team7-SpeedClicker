const target = document.querySelector("#target")
target.addEventListener("click", function(){
  target.remove();

  let y = Math.floor((Math.random() * 100))
  let x = Math.floor((Math.random() * 100))


  //TODO: Create function that creates element of same id and randomizes
  // its location
});

document.addEventListener("click", (e)=>{
  console.log((e.x))
  console.log((e.y))
});
  
