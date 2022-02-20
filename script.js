var vasya = {
  name: "Petr",
  lastName: "Petrovskiy",
  age: 22,
  hobbies: {
    art: "drawing, singing",
    display: function() {
      document.write(`I love ${this.art}.`);
    },
  },
  greet: function() { // method
    document.write(`Hello, my name is ${this.name}! I'm ${this.age} years old.`);
  }
}

// vasya.greet();
// vasya.hobbies.display();

// 1. Call 'greet' method multiple times.
// 2. Include age in the greeting.
// 3. Try chaging name and age.
// 4. Create method 'bye'.


// document.body.style.background = "red";
// document.body.textContent = "Hello world";

// getElementById
let helloWorldDiv = document.getElementById("hello-world");

helloWorldDiv.textContent = "Nice to meet you!";
helloWorldDiv.style.backgroundColor = "green";
helloWorldDiv.style.color = "white";
helloWorldDiv.style.textDecoration = "underline";
helloWorldDiv.style.fontSize = "28px";

// getElementsByTagName
let allParagraphs = document.getElementsByTagName("p");

for (let paragraph of allParagraphs) {
  paragraph.style.backgroundColor = "blue";
}

// getElementsByClassName
// italic
// yellow bg
// text red
let allHelloWorlds = document.getElementsByClassName("hello-world");

for (let helloWorld of allHelloWorlds) {
  helloWorld.style.color = "red";
  helloWorld.style.backgroundColor = "yellow";
  helloWorld.style.fontStyle = "italic";
}

// querySelector
let helloWorld2 = document.querySelector("#hello-world");
helloWorld2.style.backgroundColor = "purple";

// querySelectorAll
let allHelloWorlds2 = document.querySelectorAll(".hello-world");

for (let helloWorld of allHelloWorlds2) {
  helloWorld.style.fontSize = "5px";
}

document.querySelector('p:first-of-type').textContent = "HELLO";

var button1 = document.querySelector('button:nth-of-type(1)');
var button2 = document.querySelector('button:nth-of-type(2)');
var button3 = document.querySelector('button:nth-of-type(3)');
var allP = document.querySelectorAll('p');

button1.addEventListener('click', function() {
  for (let p of allP) {
    p.style.flexBasis = "90%";
  }
});
button2.addEventListener('click', function() {
  for (let p of allP) {
    p.style.flexBasis = "45%";
  }
});
button3.addEventListener('click', function() {
  for (let p of allP) {
    p.style.flexBasis = "30%";
  }
});
