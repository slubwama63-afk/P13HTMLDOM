const text= document.getElementById('text');
text.innerText = 'Sandra';
text.style.color = 'pink';
//Increase button
let score = 0;

function increaseBy(inputNumber) {
  score += inputNumber;
}
//Update score button
function updateScore() {
  const text = document.getElementById('text');
  text.innerText = score;
}

const button = document.getElementById('button0');
button.addEventListener('click', function() {
  increaseBy(1);
  updateScore();
});
//Reset button
function resetScore() {
  score = 0;
  updateScore();
}
const resetButton = document.getElementById('buttonReset');
resetButton.addEventListener('click', resetScore);

//Decrease button
function decreaseBy(inputNumber) {
  score -= inputNumber;
}
const decreaseButton = document.getElementById('buttonDecrease');
decreaseButton.addEventListener('click', function() {
  decreaseBy(1);
  updateScore();
});


