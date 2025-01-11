

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


function execute() {
  let max=220;
  let min=0;
  let array=new Array(20);
  let heart_rate = document.getElementById("heart_rate");
  let lowerLimit=parseInt(heart_rate.innerHTML) -10;
  
  let j=lowerLimit;
  
  for(let i=0;i<array.length;i++){
    array[i]=j;
    
    j++;
  }

  let index=Math.trunc(Math.random()*20);
  let rand=array[index];
  
  if(rand>max){
    rand=max;
  }

  if(rand<min){
    rand=min;
  }

  heart_rate.innerHTML=Math.trunc(rand);
}
changeColor();