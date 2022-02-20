document.querySelector('a').addEventListener('click', function (event) {
  event.preventDefault();
  this.textContent = "Yandex";
});
document.querySelector('a').addEventListener('contextmenu', function (event) {
  event.preventDefault();
  this.style.background = "red";
});
document.querySelector('a').addEventListener('dblclick', function (event) {
  event.preventDefault();
  this.remove();
});

document.body.addEventListener('click', function (event) {
  let div = document.createElement('div');
  document.body.append(div);

  let size = (Math.random() * 50).toFixed(0); 
  let half = size / 2;

  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.borderRadius = `${half}px`;
  let red = (Math.random() * 255).toFixed(0);
  let green = (Math.random() * 255).toFixed(0);
  let blue = (Math.random() * 255).toFixed(0);
  div.style.backgroundClip = `rgb(${red}, ${green}, ${blue});`

  div.style.position = 'absolute';
  div.style.top = `${event.clientY - half}px`;
  div.style.left = `${event.clientX - half}px`;
});