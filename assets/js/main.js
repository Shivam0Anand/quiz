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
      "Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. </br> Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the 'temporal dead zone'. When we try to access the variables before they are declared, JavaScript throws a ReferenceError."
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
  },
  {
    question:
      "let greeting; \n greetign = {}; // Typo! \n console.log(greetign);",
    choiceA: "{}",
    choiceB: "ReferenceError: greetign is not defined",
    choiceC: "undefined",
    choiceD: "None",
    correctAnswer: "A",
    answer: "{}",
    discription:
      'It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser). In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.'
  },
  {
    question:
      'function bark() { \n console.log("Woof!"); \n  } \n\n bark.animal = "dog";',
    choiceA: "Nothing, this is totally fine!",
    choiceB: "SyntaxError. You cannot add properties to a function this way.",
    choiceC: '"Woof" gets logged.',
    choiceD: "ReferenceError",
    correctAnswer: "A",
    answer: "Nothing, this is totally fine!",
    discription:
      "This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects) A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable."
  },
  {
    question:
      'function Person(firstName, lastName) { \n this.firstName = firstName; \n this.lastName = lastName; \n } \n \n const member = new Person("Lydia", "Hallie"); \n Person.getFullName = function() { \n return `${this.firstName} ${this.lastName}`; \n }; \n \n console.log(member.getFullName());',
    choiceA: "TypeError",
    choiceB: "SyntaxError",
    choiceC: "Lydia Hallie",
    choiceD: "undefined undefined",
    correctAnswer: "A",
    answer: "TypeError",
    discription:
      "You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,would have made member.getFullName() work. Why is this beneficial? Say that we added this method to the constructor itself. Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!"
  },
  {
    question:
      'function Person(firstName, lastName) { \n this.firstName = firstName; \n this.lastName = lastName; \n } \n \n const lydia = new Person("Lydia", "Hallie"); \n const sarah = Person("Sarah", "Smith"); \n \n console.log(lydia); \n console.log(sarah);',
    choiceA: 'Person {firstName: "Lydia", lastName: "Hallie"} and undefined',
    choiceB:
      'Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}',
    choiceC: 'Person {firstName: "Lydia", lastName: "Hallie"} and {}',
    choiceD:
      'Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError',
    correctAnswer: "A",
    answer: 'Person {firstName: "Lydia", lastName: "Hallie"} and undefined',
    discription:
      "For sarah, we didn't use the new keyword. When using new, it refers to the new empty object we create. However, if you don't add new it refers to the global object! We said that this.firstName equals 'Sarah' and this.lastName equals 'Smith'. What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function."
  },
  {
    question: "What are the three phases of event propagation?",
    choiceA: "Target > Capturing > Bubbling",
    choiceB: "Bubbling > Target > Capturing",
    choiceC: "Target > Bubbling > Capturing",
    choiceD: "Capturing > Target > Bubbling",
    correctAnswer: "D",
    answer: "Capturing > Target > Bubbling",
    discription:
      "During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins."
  },
  {
    question: "All object have prototypes.",
    choiceA: "True",
    choiceB: "False",
    choiceC: "",
    choiceD: "",
    correctAnswer: "B",
    answer: "False",
    discription:
      "All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you."
  },
  {
    question: 'function sum(a, b) { \n return a + b; \n } \n \n sum(1, "2");',
    choiceA: "NaN",
    choiceB: "TypeError",
    choiceC: "12",
    choiceD: "3",
    correctAnswer: "C",
    answer: "12",
    discription:
      'JavaScript is a dynamically typed language: we do not specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another. In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ("2"), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what is happening here is "1" + "2" which returns "12".'
  },
  {
    question:
      "let number = 0; \n console.log(number++); \n  console.log(++number); \n  console.log(number);",
    choiceA: "1 1 2",
    choiceB: "1 2 2",
    choiceC: "0 2 2",
    choiceD: "0 1 2",
    correctAnswer: "C",
    answer: "0 2 2",
    discription:
      "The postfix unary operator ++: </br> 1: Returns the value (this returns 0) </br> 2: Increments the value (number is now 1) </br> The prefix unary operator ++:</br> </br> 1: Increments the value (number is now 2)</br> 2: Returns the value (this returns 2)</br> This returns 0 2 2."
  },
  {
    question:
      'function getPersonInfo(one, two, three) { \n console.log(one); \n console.log(two); \n console.log(three); \n } \n \n const person = "Lydia";\n const age = 21; \n \n getPersonInfo`${person} is ${age} years old`;',
    choiceA: 'Lydia" 21 ["", " is ", " years old"]',
    choiceB: '["", " is ", " years old"] "Lydia" 21',
    choiceC: '"Lydia" ["", " is ", " years old"] 21',
    choiceD: "None",
    correctAnswer: "B",
    answer: '["", " is ", " years old"] "Lydia" 21',
    discription:
      "If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!"
  },
  {
    question:
      'function checkAge(data) { \n if (data === { age: 18 }) { \n console.log("You are an adult!"); \n } else if (data == { age: 18 }) { \n console.log("You are still an adult."); \n } else { \n console.log(`Hmm.. You do not have an age I guess`); \n } \n } \n \n checkAge({ age: 18 });',
    choiceA: "You are an adult!",
    choiceB: "You are still an adult.",
    choiceC: "Hmm.. You don't have an age I guess",
    choiceD: "None",
    correctAnswer: "C",
    answer: "Hmm.. You don't have an age I guess",
    discription:
      "When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.</br></br> The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.</br></br>This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false."
  },
  {
    question:
      "function getAge(...args) { \n console.log(typeof args); \n } \n \n getAge(21);",
    choiceA: "number",
    choiceB: "array",
    choiceC: "object",
    choiceD: "NaN",
    correctAnswer: "C",
    answer: "object",
    discription:
      'The rest parameter (...args.) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object".'
  },
  {
    question:
      'function getAge() { \n "use strict"; \n age = 21; \n console.log(age); \n } \n \n getAge();',
    choiceA: "21",
    choiceB: "undefined",
    choiceC: "ReferenceError",
    choiceD: "TypeError",
    correctAnswer: "C",
    answer: "ReferenceError",
    discription:
      'With "use strict", you can make sure that you do not accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we did not use "use strict", it would have worked, since the property age would have gotten added to the global object.'
  },
  {
    question: 'const sum = eval("10*10+5");',
    choiceA: "105",
    choiceB: '"105"',
    choiceC: "TypeError",
    choiceD: "10*10+5",
    correctAnswer: "A",
    answer: "105",
    discription:
      "eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105."
  },
  {
    question: 'sessionStorage.setItem("cool_secret", 123);',
    choiceA: "Forever, the data doesn't get lost.",
    choiceB: "When the user closes the tab.",
    choiceC: "When the user closes the entire browser, not only the tab.",
    choiceD: "When the user shuts off their computer.",
    correctAnswer: "B",
    answer: "When the user closes the tab.",
    discription:
      "The data stored in sessionStorage is removed after closing the tab.</br> If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked."
  },
  {
    question: "var num = 8;\n var num = 10;\n \n console.log(num);",
    choiceA: "8",
    choiceB: "10",
    choiceC: "SyntaxError",
    choiceD: "ReferenceError",
    correctAnswer: "B",
    answer: "10",
    discription:
      "With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value. You cannot do this with let or const since they're block-scoped."
  },
  {
    question:
      "const obj = { 1: 'a', 2: 'b', 3: 'c' } \n const set = new Set([1, 2, 3, 4, 5]) \n \n obj.hasOwnProperty('1') \n obj.hasOwnProperty(1) \n set.has('1') \n set.has(1)",
    choiceA: "false true false true",
    choiceB: "false true true true",
    choiceC: "true true false true",
    choiceD: "true true true true",
    correctAnswer: "C",
    answer: "true true false true",
    discription:
      "All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true. </br> It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true. "
  },
  {
    question:
      'const obj = { a: "one", b: "two", a: "three" }; \n console.log(obj);',
    choiceA: '{ a: "one", b: "two" }',
    choiceB: '{ b: "two", a: "three" }',
    choiceC: '{ a: "three", b: "two" }',
    choiceD: "SyntaxError",
    correctAnswer: "C",
    answer: '{ a: "three", b: "two" }',
    discription:
      "If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value."
  },
  {
    question:
      'The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
    choiceA: "true",
    choiceB: "false",
    choiceC: " it depends",
    choiceD: "none",
    correctAnswer: "A",
    answer: "true",
    discription:
      "The base execution context is the global execution context: it's what's accessible everywhere in your code."
  },
  {
    question:
      "for (let i = 1; i < 5; i++) { \n if (i === 3) continue; \n console.log(i); \n }",
    choiceA: "1 2",
    choiceB: "1 2 3",
    choiceC: "1 2 4",
    choiceD: "1 3 4",
    correctAnswer: "C",
    answer: "1 2 4",
    discription:
      "The continue statement skips an iteration if a certain condition returns true."
  },
  {
    question:
      'String.prototype.giveLydiaPizza = () => { \n return "Just give Lydia pizza already!"; \n }; \n \n const name = "Lydia"; \n \n name.giveLydiaPizza();',
    choiceA: "Just give Lydia pizza already!",
    choiceB: "TypeError: not a function",
    choiceC: "SyntaxError",
    choiceD: "undefined",
    correctAnswer: "A",
    answer: "Just give Lydia pizza already!",
    discription:
      "String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!"
  },
  {
    question:
      'const a = {}; \n const b = { key: "b" }; \n const c = { key: "c" }; \n \n a[b] = 123; \n a[c] = 456; \n \n console.log(a[b]);',
    choiceA: "123",
    choiceB: "456",
    choiceC: "undefined",
    choiceD: "ReferenceError",
    correctAnswer: "B",
    answer: "456",
    discription:
      'Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123. </br> However, when we stringify an object, it becomes "[Object object]". So what we are saying here, is that a["Object object"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["Object object"] = 456. </br> Then, we log a[b], which is actually a["Object object"]. We just set that to 456, so it returns 456.'
  },
  {
    question:
      'const foo = () => console.log("First"); \n const bar = () => setTimeout(() => console.log("Second")); \n const baz = () => console.log("Third"); \n \n bar(); \n foo(); \n baz();',
    choiceA: "First Second Third",
    choiceB: "First Third Second",
    choiceC: "Second First Third",
    choiceD: "Second Third First",
    correctAnswer: "B",
    answer: "First Third Second",
    discription:
      "We have a setTimeout function and invoked it first. Yet, it was logged last. </br></br> This is because in browsers, we don't just have the runtime engine, we also have something called a WebAPI. The WebAPI gives us the setTimeout function to start with, and for example the DOM.</br></br>After the callback is pushed to the WebAPI, the setTimeout function itself (but not the callback!) is popped off the stack."
  },
  {
    question:
      '< div onclick="console.log("first div")> \n < div onclick="console.log("second div")"> \n < button onclick="console.log("button")"> \n Click! \n < /button> \n < /div> \n < /div>',
    choiceA: "Outer div",
    choiceB: "Inner div",
    choiceC: "button",
    choiceD: "An array of all nested elements.",
    correctAnswer: "C",
    answer: "button",
    discription:
      "The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation"
  },
  {
    question:
      '< div onclick="console.log("div")"> \n < p onclick="console.log("p")"> \n Click here! \n < /p> \n < /div>',
    choiceA: "p div",
    choiceB: "div p",
    choiceC: "p",
    choiceD: "div",
    correctAnswer: "A",
    answer: "p div",
    discription:
      "If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards."
  },
  {
    question:
      'const person = { name: "Lydia" }; \n \n function sayHi(age) { \n console.log(`${this.name} is ${age}`); \n } \n \n sayHi.call(person, 21); \n sayHi.bind(person, 21);',
    choiceA: "undefined is 21 Lydia is 21",
    choiceB: "function function",
    choiceC: "Lydia is 21 Lydia is 21",
    choiceD: "Lydia is 21 function",
    correctAnswer: "D",
    answer: "Lydia is 21 function",
    discription:
      "With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately! </br> .bind. returns a copy of the function, but with a bound context! It is not executed immediately."
  },
  {
    question:
      "function sayHi() { \n return (() => 0)(); \n } \n \n console.log(typeof sayHi());",
    choiceA: '"object"',
    choiceB: '"number"',
    choiceC: '"function"',
    choiceD: '"undefined"',
    correctAnswer: "B",
    answer: '"number"',
    discription:
      'The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number". </br></br>FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. "function" is not a type, since functions are objects, it is of type "object".'
  },
  {
    question:
      '0; \n new Number(0); \n (""); \n (" "); \n new Boolean(false); \n undefined;',
    choiceA: "0, '', undefined",
    choiceB: "0, new Number(0), '', new Boolean(false), undefined",
    choiceC: "0, '', new Boolean(false), undefined",
    choiceD: "All of them are falsy",
    correctAnswer: "A",
    answer: "0, '', undefined",
    discription:
      "There are only six falsy values: </br></br> &nbsp;&nbsp;&nbsp;1. undefined </br> &nbsp;&nbsp;&nbsp;2. null </br> &nbsp;&nbsp;&nbsp;3. NaN </br> &nbsp;&nbsp;&nbsp;4. 0 </br> &nbsp;&nbsp;&nbsp;5. ' ' (empty string) </br> &nbsp;&nbsp;&nbsp;6. false </br></br>Function constructors, like new Number and new Boolean are truthy."
  }
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // },
  // {
  //   question: "",
  //   choiceA: "",
  //   choiceB: "",
  //   choiceC: "",
  //   choiceD: "",
  //   correctAnswer: "",
  //   answer: "",
  //   discription: ""
  // }
];

var quizQuestionAllIndex = [];
for (var i = 0; i < 5; i++) {
  var newQuestionIndex = Math.floor(Math.random() * 32);
  quizQuestionAllIndex.push(newQuestionIndex);
}
console.log(quizQuestionAllIndex);

var quizQuestions = [];
quizQuestionAllIndex.forEach(e => {
  quizQuestions.push(jsQuestions[e]);
});
console.log(quizQuestions);

// set Questions into localstorage
localStorage.setItem("questions", JSON.stringify(jsQuestions));
var newArr = JSON.parse(localStorage.getItem("questions"));

// Set quiz question in local storage

localStorage.setItem("quizQuestion", JSON.stringify(quizQuestions));
var newQuizQuestions = JSON.parse(localStorage.getItem("quizQuestion"));

var container = document.querySelector(".container");
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
var mcqPractice = document.getElementById("mcqPractice");

// quiz
var quiz = document.getElementById("quiz");
var repeatQuiz = document.getElementById("repeatQuiz");
var containerQuiz = document.querySelector(".containerQuiz");
var questionQuiz = document.querySelector(".questionQuiz");
var choiceAquiz = document.querySelector(".choiceAquiz");
var choiceBquiz = document.querySelector(".choiceBquiz");
var choiceCquiz = document.querySelector(".choiceCquiz");
var choiceDquiz = document.querySelector(".choiceDquiz");
var QuizNext = document.getElementById("quiz-next");
var showScore = document.getElementById("score");
var scoreClass = document.querySelector(".score");

mcqPractice.addEventListener("click", function() {
  location.reload();
});

function practice() {
  // Show questions
  console.log("practice");

  var random;

  function showQuestion() {
    random = Math.floor(Math.random() * newArr.length);
    question.innerHTML = `${newArr[random].question}`;
    Prism.highlightAll();

    choiceA.innerText = `${newArr[random].choiceA}`;
    choiceB.innerText = `${newArr[random].choiceB}`;
    choiceC.innerText = `${newArr[random].choiceC}`;
    choiceD.innerText = `${newArr[random].choiceD}`;
  }

  showQuestion();
  // show NEXT
  function showNext() {
    result.style.visibility = "hidden";
    result.style.height = 0;
    discription.style.visibility = "hidden";
    discription.style.height = 0;
    choiceAis.style.background = "#39b0d3";
    choiceBis.style.background = "#39b0d3";
    choiceCis.style.background = "#39b0d3";
    choiceDis.style.background = "#39b0d3";
    showQuestion();
  }

  next.addEventListener("click", showNext);

  answer.addEventListener("click", showAnswer);
  function showAnswer() {
    result.style.height = "auto";
    result.style.visibility = "visible";
    discription.style.height = "auto";
    discription.style.visibility = "visible";
    result.innerText = `${newArr[random].answer}`;
    discription.innerHTML = `${newArr[random].discription}`;
  }

  // Check Answer

  choiceA.addEventListener("click", function() {
    if (newArr[random].correctAnswer == "A") {
      choiceAis.style.background = "green";
      setTimeout(showNext, 4000);
    } else {
      choiceAis.style.background = "red";
    }
  });

  choiceB.addEventListener("click", function() {
    if (newArr[random].correctAnswer == "B") {
      choiceBis.style.background = "green";
      setTimeout(showNext, 4000);
    } else {
      choiceBis.style.background = "red";
    }
  });

  choiceC.addEventListener("click", function() {
    if (newArr[random].correctAnswer == "C") {
      choiceCis.style.background = "green";
      setTimeout(showNext, 4000);
    } else {
      choiceCis.style.background = "red";
    }
  });

  choiceD.addEventListener("click", function() {
    if (newArr[random].correctAnswer == "D") {
      choiceDis.style.background = "green";
      setTimeout(showNext, 4000);
    } else {
      choiceDis.style.background = "red";
    }
  });
}
practice();

// Quiz

quiz.addEventListener("click", triggerQuiz);

function triggerQuiz() {
  quiz.style.visibility = "hidden";

  var i = 0;
  repeatQuiz.addEventListener("click", function() {
    i = 0;
    scoreClass.style.visibility = "hidden";
    triggerQuiz();
  });
  var score = 0;

  console.log("quiz");
  container.style.visibility = "hidden";
  containerQuiz.style.visibility = "visible";
  function showQuizQuestion() {
    console.log(i);
    if (i < 5) {
      questionQuiz.innerHTML = `${newQuizQuestions[i].question}`;
      Prism.highlightAll();
      choiceAquiz.innerText = `${newQuizQuestions[i].choiceA}`;
      choiceBquiz.innerText = `${newQuizQuestions[i].choiceB}`;
      choiceCquiz.innerText = `${newQuizQuestions[i].choiceC}`;
      choiceDquiz.innerText = `${newQuizQuestions[i].choiceD}`;
    } else {
      containerQuiz.style.visibility = "hidden";
      scoreClass.style.visibility = "visible";
      showScore.innerText = score;
      // document.write("You Scored = " + score);
    }
  }

  showQuizQuestion();

  // Show Next Questions
  function QuizShowNext() {
    // console.log("yes");
    i++;
    showQuizQuestion();
  }
  QuizNext.addEventListener("click", QuizShowNext);

  // Check Answer

  choiceAquiz.addEventListener("click", function() {
    if (newQuizQuestions[i].correctAnswer == "A") {
      score += 1;
      console.log(score);
      QuizShowNext();
    } else {
      score = score - 1;
      console.log(score);
      QuizShowNext();
    }
  });

  choiceBquiz.addEventListener("click", function() {
    if (newQuizQuestions[i].correctAnswer == "B") {
      score += 1;
      console.log(score);
      QuizShowNext();
    } else {
      score = score - 1;
      console.log(score);
      QuizShowNext();
    }
  });

  choiceCquiz.addEventListener("click", function() {
    if (newQuizQuestions[i].correctAnswer == "C") {
      score += 1;
      console.log(score);
      QuizShowNext();
    } else {
      score = score - 1;
      console.log(score);
      QuizShowNext();
    }
  });

  choiceDquiz.addEventListener("click", function() {
    if (newQuizQuestions[i].correctAnswer == "D") {
      score += 1;
      console.log(score);
      QuizShowNext();
    } else {
      score = score - 1;
      console.log(score);
      QuizShowNext();
    }
  });
}

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

var btn2 = document.querySelector(".mouse-cursor-gradient-tracking2");
btn2.onmousemove = function(e) {
  var x = e.pageX - btn2.offsetLeft - btn2.offsetParent.offsetLeft;
  var y = e.pageY - btn2.offsetTop - btn2.offsetParent.offsetTop;
  btn2.style.setProperty("--x", x + "px");
  btn2.style.setProperty("--y", y + "px");
};
