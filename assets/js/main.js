var jsQuestions = [
  {
    question:
      'function sayHi() { \n console.log(name); \n console.log(age); \n var name = "Lydia";\n  let age = 21; \n } \n \n sayHi();\n ',
    choiceA: " Lydia and undefined",
    choiceB: " Lydia and ReferenceError",
    choiceC: " ReferenceError and 21",
    choiceD: " undefined and ReferenceError",
    correctAnswer: "D",
    answer: "Answer: D - 'undefined and ReferenceError'",
    discription:
      "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined."
  },
  {
    question:
      "for (var i = 0; i < 3; i++) { \n  setTimeout(() => console.log(i), 1); \n } \n  \n for (let i = 0; i < 3; i++) { \n  setTimeout(() => console.log(i), 1); \n }",
    choiceA: " 0 1 2 and 0 1 2",
    choiceB: " 0 1 2 and 3 3 3",
    choiceC: " 3 3 3 and 0 1 2",
    choiceD: " None",
    correctAnswer: "C",
    answer: "Answer: C - '3 3 3 and 0 1 2'",
    discription:
      "Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example."
  },
  {
    question:
      "const shape = { \n radius: 10, \n  diameter() { \n  return this.radius * 2; \n }, \n perimeter: () => 2 * Math.PI * this.radius \n  }; \n \n console.log(shape.diameter()); \n  console.log(shape.perimeter());",
    choiceA: " 20 and 62.83185307179586",
    choiceB: " 20 and NaN",
    choiceC: " 20 and 63",
    choiceD: " NaN and 63",
    correctAnswer: "B",
    answer: "Answer: B - 'B: 20 and NaN'",
    discription:
      "Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example). There is no value radius on that object, which returns undefined."
  },
  {
    question: '+true; \n !"Lydia";',
    choiceA: " 1 and false",
    choiceB: " false and NaN",
    choiceC: " false and false",
    choiceD: " None",
    correctAnswer: "A",
    answer: "Answer: B - false and NaN",
    discription:
      "The unary plus tries to convert an operand to a number. true is 1, and false is 0. The string 'Lydia' is a truthy value. What we're actually asking, is 'is this truthy value falsy?'. This returns false."
  },
  {
    question:
      'const bird = { \n size: "small" \n }; \n    const mouse = {\n name: "Mickey",\n small: true \n};',
    choiceA: "mouse.bird.size is not valid",
    choiceB: "mouse[bird.size] is not valid",
    choiceC: "mouse[bird['size']] is not valid",
    choiceD: "All of them are valid",
    correctAnswer: "A",
    answer: "Answer: A - mouse.bird.size is not valid",
    discription:
      'In JavaScript, all object keys are strings (unless it is a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true However, with dot notation, this does not happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we are actually asking undefined.size. This is not valid, and will throw an error similar to Cannot read property "size" of undefined.'
  },
  {
    question:
      'let c = { greeting: "Hey!" };\n let d; \n \n d = c; \n c.greeting = "Hello"; \n console.log(d.greeting);',
    choiceA: "Hello",
    choiceB: "Hey!",
    choiceC: "undefined",
    choiceD: "ReferenceError",
    correctAnswer: "A",
    answer: "Answer: A -",
    discription:
      "In JavaScript, all objects interact by reference when setting them equal to each other. First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them."
  },
  {
    question:
      "let a = 3;\n let b = new Number(3); \n let c = 3; \n \n console.log(a == b); \n console.log(a === b);\n console.log(b === c);",
    choiceA: "true false true",
    choiceB: "false false true",
    choiceC: "true false false",
    choiceD: "false true true",
    correctAnswer: "C",
    answer: "Answer: C - true false false",
    discription:
      "new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false."
  },
  {
    question:
      'class Chameleon { \n static colorChange(newColor) { \n this.newColor = newColor; \n return this.newColor; \n } \n constructor({ newColor = "green" } = {}) { \n this.newColor = newColor; \n } \n } \n const freddie = new Chameleon({ newColor: "purple" }); \n console.log(freddie.colorChange("orange"));, \n',
    choiceA: "orange",
    choiceB: "purple",
    choiceC: "green",
    choiceD: "Type Error",
    correctAnswer: "D",
    answer: "Answer: D - Type Error",
    discription:
      "The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since freddie is a child, the function is not passed down, and not available on the freddie instance: a TypeError is thrown."
  }
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "",
  //   discription: ""
  // },
];

// set Questions into localstorage

localStorage.setItem("questions", JSON.stringify(jsQuestions));

var newArr = JSON.parse(localStorage.getItem("questions"));
console.log("check point ", newArr);

var question = document.querySelector(".question");
var choiceA = document.querySelector(".choiceA");
var choiceAis = document.getElementById("choiceA");
var choiceB = document.querySelector(".choiceB");
var choiceBis = document.getElementById("choiceB");
var choiceC = document.querySelector(".choiceC");
var choiceCis = document.getElementById("choiceC");
var choiceD = document.querySelector(".choiceD");
var choiceDis = document.getElementById("choiceD");
var answer = document.getElementById("answer");
var next = document.getElementById("next");
var discription = document.getElementById("discription");
var result = document.getElementById("answerKey");

// Show questions
var random;

function showQuestion() {
  random = Math.floor(Math.random() * jsQuestions.length);
  question.innerHTML = `${jsQuestions[random].question}`;
  // question.classList.add("language-javascript");
  choiceA.innerText = `${jsQuestions[random].choiceA}`;
  choiceB.innerText = `${jsQuestions[random].choiceB}`;
  choiceC.innerText = `${jsQuestions[random].choiceC}`;
  choiceD.innerText = `${jsQuestions[random].choiceD}`;
}

showQuestion();
// show NEXT
function showNext() {
  result.style.visibility = "hidden";
  discription.style.visibility = "hidden";
  choiceAis.style.background = "transparent";
  choiceBis.style.background = "transparent";
  choiceCis.style.background = "transparent";
  choiceDis.style.background = "transparent";
  showQuestion();
}

next.addEventListener("click", showNext);

answer.addEventListener("click", showAnswer);
function showAnswer() {
  result.style.visibility = "visible";
  discription.style.visibility = "visible";
  result.innerText = `${jsQuestions[random].answer}`;
  discription.innerText = `${jsQuestions[random].discription}`;
}

// Check Answer

choiceA.addEventListener("click", function() {
  if (jsQuestions[random].correctAnswer == "A") {
    choiceAis.style.background = "green";
  } else {
    choiceAis.style.background = "red";
  }
});

choiceB.addEventListener("click", function() {
  if (jsQuestions[random].correctAnswer == "B") {
    choiceBis.style.background = "green";
  } else {
    choiceBis.style.background = "red";
  }
});

choiceC.addEventListener("click", function() {
  if (jsQuestions[random].correctAnswer == "C") {
    choiceCis.style.background = "green";
  } else {
    choiceCis.style.background = "red";
  }
});

choiceD.addEventListener("click", function() {
  if (jsQuestions[random].correctAnswer == "D") {
    choiceDis.style.background = "green";
  } else {
    choiceDis.style.background = "red";
  }
});
// Buttons gradient

var btn = document.querySelector(".mouse-cursor-gradient-tracking");
btn.onmousemove = function(e) {
  var x = e.pageX - btn.offsetLeft - btn.offsetParent.offsetLeft;
  var y = e.pageY - btn.offsetTop - btn.offsetParent.offsetTop;
  btn.style.setProperty("--x", x + "px");
  btn.style.setProperty("--y", y + "px");
};

var btn1 = document.querySelector(".mouse-cursor-gradient-tracking1");
btn1.onmousemove = function(e) {
  var x = e.pageX - btn1.offsetLeft - btn1.offsetParent.offsetLeft;
  var y = e.pageY - btn1.offsetTop - btn1.offsetParent.offsetTop;
  btn1.style.setProperty("--x", x + "px");
  btn1.style.setProperty("--y", y + "px");
};
