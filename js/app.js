const text= document.getElementById('text');
text.innerText = 'Sandra';
text.style.color = 'pink';

let score = 0;

function increaseBy(inputNumber) {
  score += inputNumber;
}

function updateScore() {
  const text = document.getElementById('text');
  text.innerText = score;
}

const button = document.getElementById('button0');
button.addEventListener('click', function() {
  increaseBy(1);
  updateScore();
});

function resetScore() {
  score = 0;
  updateScore();
}
const resetButton = document.getElementById('buttonReset');
resetButton.addEventListener('click', resetScore);
