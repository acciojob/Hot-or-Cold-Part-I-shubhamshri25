//your code here

// var btn = document.getElementById('btn');
// var numPTag = document.getElementById('num')

// function generateRandomNo {
// 	var num = Math.floor((Math.random()*20);
// 	alert(num);
// 	numPTag.textContent = num;
// }

// btn.addEventListener('click',generateRandomNo);

var randomNum;
var input;

function randomNumGenerator() {
  randomNum = Math.floor(Math.random() * 41) - 20;
  document.getElementById("num").innerText = randomNum;
  guessNum();
  print();
}

function guessNum() {
  input = Number(document.getElementById("guess").value);
}
function print() {
  if (Math.abs(randomNum - input) <= 5) {
    document.getElementById("respond").innerText = "Hot";
  } else {
    document.getElementById("respond").innerHTML = "Cold";
  }
}