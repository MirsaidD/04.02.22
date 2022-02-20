let h1 = document.querySelector('h1');

document.querySelector('#text').addEventListener('input', function () {
  h1.textContent = this.value;
});

// let input = document.querySelector('#color') 

document.querySelector('#color').addEventListener('input', function () {
  h1.style.color = this.value;
});
document.querySelector('#background').addEventListener('input', function () {
  h1.style.backgroundColor = this.value;
});


// document.querySelector('#font') 
// .addEventListener('select', function() { 
// h1.style.fontFamily = this.value ; 

// switch (this.value) { 
//   case "Arial" : 
//     h1.style.fontFamily = "Arial"; 
//     break; 
//     case "Times" : 
//     h1.style.fontFamily = "Times"; 
//     break; 
//     case "Impact" : 
//     h1.style.fontFamily = "impact"; 
//     break; 
//     case "Verdana" : 
//     h1.style.fontFamily = "Verdana"; 
//     break; 
//   default; 
//     break; 
// } 

// }); 

document.querySelector('#font-size').addEventListener('input', function () {
  h1.style.fontSize = this.value + "px";
  this.nextSibling.textContent = h1.style.fontSize;
});

document.getElementsByName('border').forEach(function (input) {
  input.addEventListener('input', function () {
    h1.style.border = `1px ${this.value} black`;
  });
});

document.getElementById('url').addEventListener('input', function(){
  
})