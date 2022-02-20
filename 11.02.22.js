let example1 = document.querySelector('#example1');
example1.addEventListener('click', function (event) {
  // alert('Hello World');
  // console.log(event);
  window.location.href = "https://github.com/";

  event.preventDefault();

});
document.body.addEventListener('contextmenu', function () {
  // event.preventDefault();
});
document.querySelector('div').addEventListener('dblclick', function () {
  // console.log(event);
  alert('Hello');
  // event.preventDefault(); doesn't work
});

let example = document.createElement('section');
example1.style.width = '20px';
example1.style.height = '20px';
example1.style.backgroundColor = 'black';
example1.style.position = 'absolute';
document.body.append(example);
document.querySelector('div').addEventListener('mousemove', function (event) {
  example.style.top = '20px';
  example.style.left = '20px';
  console.log(event.clientX); 
  consele.log(event.clientY);
});