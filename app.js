

// variable to store our intervalID
let nIntervId;
let nabiz =document.querySelector("#heart_rate");
console.log(nabiz);
nabiz.addEventListener("click", increase);
function increase(){
  let heart = document.getElementById("heart_rate");
  let num=parseInt(heart.innerHTML);
  heart.innerHTML=num +10;

}

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(execute, 5000);
  }
}

//feature
//feature2
//new branch stuff
function execute() {
  let heart_rate = document.getElementById("heart_rate");
  let rand= Math.random()*20 + 80;
  heart_rate.innerHTML=Math.trunc(rand);
}
changeColor();