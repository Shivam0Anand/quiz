var jsQuestions = [
  {
    question:
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=4x&wm=false&code=function%2520sayHi()%2520%257B%250A%2520%2520console.log(name)%253B%250A%2520%2520console.log(age)%253B%250A%2520%2520var%2520name%2520%253D%2520%2522Lydia%2522%253B%250A%2520%2520let%2520age%2520%253D%252021%253B%250A%257D%250A%250AsayHi()%253B" sandbox="allow-scripts allow-same-origin"></iframe>',
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
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=for%2520(var%2520i%2520%253D%25200%253B%2520i%2520%253C%25203%253B%2520i%252B%252B)%2520%257B%250A%2520%2520setTimeout(()%2520%253D%253E%2520console.log(i)%252C%25201)%253B%250A%257D%250A%250Afor%2520(let%2520i%2520%253D%25200%253B%2520i%2520%253C%25203%253B%2520i%252B%252B)%2520%257B%250A%2520%2520setTimeout(()%2520%253D%253E%2520console.log(i)%252C%25201)%253B%250A%257D" sandbox="allow-scripts allow-same-origin"></iframe>',
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
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=const%2520shape%2520%253D%2520%257B%250A%2520%2520radius%253A%252010%252C%250A%2520%2520diameter()%2520%257B%250A%2520%2520%2520%2520return%2520this.radius%2520*%25202%253B%250A%2520%2520%257D%252C%250A%2520%2520perimeter%253A%2520()%2520%253D%253E%25202%2520*%2520Math.PI%2520*%2520this.radius%250A%257D%253B%250A%250Aconsole.log(shape.diameter())%253B%250Aconsole.log(shape.perimeter())%253B" sandbox="allow-scripts allow-same-origin"></iframe>',
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
    question:
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=%252Btrue%253B%250A!%2522Lydia%2522%253B" sandbox="allow-scripts allow-same-origin"> </iframe>',
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
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=const%2520bird%2520%253D%2520%257B%250A%2520%2520size%253A%2520%2522small%2522%250A%257D%253B%250A%250Aconst%2520mouse%2520%253D%2520%257B%250A%2520%2520name%253A%2520%2522Mickey%2522%252C%250A%2520%2520small%253A%2520true%250A%257D%253B" sandbox="allow-scripts allow-same-origin"></iframe>',
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
      '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=sharp&l=javascript&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=0px&ph=0px&ln=true&fm=Hack&fs=16.5px&lh=133%25&si=false&es=2x&wm=false&code=let%2520c%2520%253D%2520%257B%2520greeting%253A%2520%2522Hey!%2522%2520%257D%253B%250Alet%2520d%253B%250A%250Ad%2520%253D%2520c%253B%250Ac.greeting%2520%253D%2520%2522Hello%2522%253B%250Aconsole.log(d.greeting)%253B" sandbox="allow-scripts allow-same-origin"></iframe>',
    choiceA: "Hello",
    choiceB: "Hey!",
    choiceC: "undefined",
    choiceD: "ReferenceError",
    correctAnswer: "A",
    answer: "Answer: A -",
    discription: ""
  }
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "Answer: A -",
  //   discription: ""
  // },
  // {
  //   question:'',
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: ,
  //   answer: "Answer: A -",
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
