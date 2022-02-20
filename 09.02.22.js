let example2Button = document.getElementById('example2');
example2Button.onclick = function () {
  alert("Nice to meet you!");
}

let example3Button = document.getElementById('example3');
example3Button.addEventListener('click', function () {
  alert("Bye!")
});

let example4Button = document.querySelector('#example4');
example4Button.addEventListener('click', function () {
  example4Button.textContent = "Nice to meet you!"
});

let example5Div = document.querySelector('#example5');
example5Div.addEventListener('click', function () {
  alert(example5Div.textContent.length);
});

let num = 0;
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () {
  num = 0;
  h1.textContent = num;
});

let increaseButton = document.querySelector('#increase');
increaseButton.addEventListener('click', function () {
  num = num + 1;
  h1.textContent = num;
});

let decreaseButton = document.querySelector('#decrease');
decreaseButton.addEventListener('click', function () {
  num = num - 1;
  h1.textContent = num;
});

let example8Button = document.querySelector('#example8')
function example8Action() {
  alert("hello");
}
example8Button.addEventListener('click', exampleButton);