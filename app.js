

// variable to store our intervalID
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(execute, 1000);
  }
}

function execute() {
  let heart_rate = document.getElementById("heart_rate");
  let rand= Math.random()*20 + 80;
  heart_rate.innerHTML=Math.trunc(rand);
}
changeColor();