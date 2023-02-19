//your code here

var btn = document.getElementById('btn');
var numPTag = document.getElementById('num')
var res = document.getElementById('respond');
var randomNum;
var input;

function randomNumGenerator() {
  randomNum = Math.floor(Math.random() * 41) - 20;
  numPTag.innerText = randomNum;
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

btn.addEventListener('click',generateRandomNo);




