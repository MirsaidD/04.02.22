// //Method 1
// document.body.innerHTML = "<h1>Hello world</h1>";
// //create
// let.h1Element = document.querySelector('h1');
// //FIng
// h1Element.style.color = rgb(255, 0, 0);
//MEthod 2
//create
let h2Element = document.createElement('h2');
//Attach
document.body.prepend(h2Element);
//MOdify
h2Element.textContent = "Nice to meet you!";

let exercisesElement = document.querySelector(`#exercises`)

let h1Element = document.createElement('h1')//create
h1Element.textContent = "h1 header"; //modify
exercisesElement.append(h1Element);//attach

let h2Element = document.createElement('h2');
h2Element.textContent = "H2 header";
exercisesElement.append(h2Element);


let h3Element = document.createElement('h3');
h3Element.textContent = "H3 header";
exercisesElement.append(h3Element);

let h4Element = document.createElement('h4');
h4Element.textContent = "H4 header";
exercisesElement.prepend(h3Element);

let h5Element = document.createElement('h5');
h5Element.textContent = "H5 header";
exercisesElement.before(h5Element);

let h6Element = document.createElement('h6');
h6Element.textContent = "H6 header";
exercisesElement.after(h6Element);

// exercises

let exercises1 = document.querySelector('exercises1')
exercises1.before('before');
exercises1.prepend('prepend');
exercises1.append('append');
exercises1.after('after');
// exercises1.replaceWith('replace');

let button = document.createElement('button');
exercisesElement.prepend(button);
button.textContent = "Launch Meeting";
button.style.color = "white";
button.style.borderRadius = "10px";
button.style.backgroundColor = "blue";
button.style.border = "none";

let listElement = document.createElement('ul');
exercisesElement.prepend(listElement);
let listItemElement = document.createElement


//Create LI

for (let i = 0; i < shoppingList.length; i++) {
  let listItemElement = document.createElement('li');
  listElement.append(listItemElement);
  listItemElement.textContent = shoppingList[i];
}

//How to copy
let button2 = button.cloneNode();
button2.textContent = "Hello";
exercisesElement.prepend(button2);