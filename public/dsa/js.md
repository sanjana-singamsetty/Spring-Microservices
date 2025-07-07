# 🚀 What is JavaScript?

✅ JavaScript is a **high-level, interpreted programming language** used to make web pages interactive.
✅ It runs in the browser (and on servers with Node.js).

---

# ✍️ JavaScript Basic Syntax

## ✅ Variables

Use `let` (block-scoped) or `const` (for constants).
Old `var` is function-scoped, less used today.

```javascript
let age = 25;
const name = "Alice";
```

---

✅ Great — let’s break it down simply!

---

# ⏰ What is `setTimeout` in JavaScript?

`setTimeout` is a **built-in JavaScript function** that:

- **waits for a specified amount of time**, then
- **executes a function once**.

It’s a way to **delay execution of code**.

---

# ✍️ Syntax

```javascript
setTimeout(callback, delayInMilliseconds, arg1, arg2, ...);
```

✅ - `callback`: function to run after the delay
✅ - `delayInMilliseconds`: time to wait (1000 ms = 1 second)
✅ - `arg1, arg2, ...`: optional arguments passed to the callback

---

# 🚀 Example 1 — basic use

```javascript
console.log("Before");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("After");
```

✅ **Output order:**

```
Before
After
This runs after 2 seconds
```

Because `setTimeout` is **asynchronous** — it doesn't block the rest of the code.

---

# 🚀 Example 2 — with arguments

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 1000, "Alice");
// after 1 second: Hello, Alice!
```

---

# 🚀 Example 3 — storing the timer ID

`setTimeout` returns a **timer ID**, which can be used to cancel it.

```javascript
const timerId = setTimeout(() => {
  console.log("You will never see this");
}, 3000);

clearTimeout(timerId); // cancels it before it runs
```

---

# ⚡ In summary

✅ `setTimeout` is used to **run code after a delay**, without blocking the rest of your program.

✅ Common uses:

- show a message later
- retry after delay
- animations / transitions
- debounce / throttle functions

---

at you’d like next! 🚀

## ✅ Data Types

JavaScript has **dynamic typing** (type inferred at runtime).

| Type      | Example            |
| --------- | ------------------ |
| Number    | `42`, `3.14`       |
| String    | `"Hello"`          |
| Boolean   | `true`, `false`    |
| Object    | `{ key: "value" }` |
| Array     | `[1, 2, 3]`        |
| Null      | `null`             |
| Undefined | `undefined`        |
| Symbol    | `Symbol("desc")`   |
| BigInt    | `123n`             |

---

## ✅ Operators

```javascript
// Arithmetic
let sum = 5 + 3; // 8
let diff = 5 - 3; // 2
let product = 5 * 3; // 15
let quotient = 5 / 3; // 1.666
let remainder = 5 % 3; // 2

// Comparison
5 > 3; // true
5 === 5; // true (strict equality)
5 !== "5"; // true

// Logical
true && false; // false
true || false; // true
!true; // false
```

---

# 🚦 Control Structures

## ✅ If / else

```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## ✅ Switch

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day");
}
```

---

## ✅ Loops

### For

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While

```javascript
let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}
```

### For...of (arrays)

```javascript
for (let fruit of ["apple", "banana"]) {
  console.log(fruit);
}
```

### For...in (objects)

```javascript
const person = { name: "Bob", age: 30 };
for (let key in person) {
  console.log(key, person[key]);
}
```

---

# 🧩 Functions

## ✅ Function declaration

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

---

## ✅ Function expression

```javascript
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(2, 3)); // 6
```

---

## ✅ Arrow functions

```javascript
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice")); // Hello, Alice!
```

---

# 🗃 Objects & Arrays

## ✅ Object

```javascript
const user = {
  name: "Alice",
  age: 25,
};
console.log(user.name); // Alice
```

---

## ✅ Array

```javascript
const colors = ["red", "green", "blue"];
console.log(colors[1]); // green
```

---

# 🔥 Misc Basics

## ✅ Template strings

```javascript
const name = "Alice";
console.log(`Hello, ${name}!`); // Hello, Alice!
```

---

## ✅ Default parameters

```javascript
function greet(name = "friend") {
  console.log(`Hi, ${name}`);
}
greet(); // Hi, friend
```

---

## ✅ Destructuring

```javascript
const [a, b] = [1, 2];
const { name, age } = { name: "Bob", age: 30 };
console.log(name); // Bob
```

---

## ✅ Spread & Rest

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // [1,2,3,4]

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
```

---

# ✅ Console & typeof

```javascript
console.log("Hello");
console.warn("Warning!");
console.error("Error!");

console.log(typeof 42); // "number"
```

---

# 🚀 Summary Cheatsheet

| Feature         | Example                       |
| --------------- | ----------------------------- |
| Variable        | `let x = 10;`                 |
| If / else       | `if (x > 5) { }`              |
| Function        | `const f = () => { }`         |
| Loop            | `for (let i=0; i<5; i++) { }` |
| Object          | `{ key: "value" }`            |
| Array           | `[1, 2, 3]`                   |
| Template string | `` `Hello ${name}` ``         |
| Destructure     | `const {a} = obj;`            |
| Spread / Rest   | `...arr`, `function(...args)` |

---

✅ **Done!**

If you want, I can also give you:
👉 A **single cheatsheet file**,
👉 Some **beginner coding problems**,
👉 Or **interactive console tasks** to practice.

Just tell me what you’d like next! 🚀

# 🚀 What are Higher-Order Functions?

✅ In JavaScript, **higher-order functions (HOFs)** are functions that do **at least one of the following**:

1. **Take another function as an argument**, or
2. **Return a function as a result.**

This is possible because in JavaScript, **functions are first-class citizens**, meaning:

- You can store functions in variables,
- Pass them as arguments,
- Return them from other functions.

---

# 🧠 Examples of Higher-Order Functions

## 1️⃣ Passing a function as an argument

For example, `Array.prototype.map`, `filter`, `reduce`, `forEach` are higher-order functions.

```javascript
const numbers = [1, 2, 3, 4];

// map takes a callback function
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]
```

Here, `map` is a higher-order function because it **takes another function (the callback) as an argument**.

---

## 2️⃣ Returning a function

```javascript
function greet(message) {
  return function (name) {
    console.log(`${message}, ${name}!`);
  };
}

const sayHello = greet("Hello");
sayHello("Alice"); // Hello, Alice!
sayHello("Bob"); // Hello, Bob!
```

Here, `greet` is a higher-order function because it **returns a function**.

---

# 🌟 Common Higher-Order Functions in JavaScript

| Function  | What it does                                     |
| --------- | ------------------------------------------------ |
| `forEach` | Loops over each item in an array.                |
| `map`     | Transforms each item and returns a new array.    |
| `filter`  | Returns a new array with items that pass a test. |
| `reduce`  | Reduces array to a single value.                 |
| `find`    | Returns first item that matches a condition.     |
| `sort`    | Sorts array items.                               |
| `every`   | Checks if **all** items pass a test.             |
| `some`    | Checks if **any** item passes a test.            |

---

# 🔥 Examples of Each

## `forEach`

```javascript
[1, 2, 3].forEach((num) => {
  console.log(num * 2);
});
```

---

## `map`

```javascript
const squares = [1, 2, 3].map((num) => num * num);
console.log(squares); // [1, 4, 9]
```

---

## `filter`

```javascript
const even = [1, 2, 3, 4].filter((num) => num % 2 === 0);
console.log(even); // [2, 4]
```

---

## `reduce`

```javascript
const sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

---

## `find`

```javascript
const users = [{ name: "Alice" }, { name: "Bob" }];
const user = users.find((u) => u.name === "Bob");
console.log(user); // { name: "Bob" }
```

---

# ✨ Writing your own higher-order function

You can create functions that take other functions:

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// logs: 0 1 2
```

Or return functions:

```javascript
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

# ⚡ Why use higher-order functions?

✅ They let you **write cleaner, reusable code**.
✅ They help **abstract patterns** (like looping over arrays) into simple, powerful tools.
✅ They fit functional programming styles.

---

# 📝 Key Points to Remember

- **Functions are values.** You can assign them to variables, pass them, return them.
- **Higher-order functions** either:

  - Take functions as arguments (like `map`), or
  - Return functions (like our `multiplier`).

- Use them to make code **more declarative and expressive.**

---

Absolutely! 🎯
Here’s a **clear example of each common higher-order function in JavaScript**, with explanations.

---

# 🚀 1️⃣ `forEach`

✅ **Used for:** Running a function on each element (does not return a new array).

```javascript
const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: apple
// 1: banana
// 2: cherry
```

---

# 🚀 2️⃣ `map`

✅ **Used for:** Transforming each element into a new array.

```javascript
const numbers = [1, 2, 3, 4];

const squares = numbers.map((num) => num * num);

console.log(squares); // [1, 4, 9, 16]
```

---

# 🚀 3️⃣ `filter`

✅ **Used for:** Filtering elements into a new array that pass a test.

```javascript
const ages = [15, 21, 17, 30];

const adults = ages.filter((age) => age >= 18);

console.log(adults); // [21, 30]
```

---

# 🚀 4️⃣ `reduce`

✅ **Used for:** Reducing array to a single value (sum, product, object, etc).

```javascript
const prices = [10, 20, 30];

const total = prices.reduce((acc, price) => acc + price, 0);

console.log(total); // 60
```

---

# 🚀 5️⃣ `find`

✅ **Used for:** Finding the **first** element that matches a condition.

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const bob = users.find((user) => user.name === "Bob");

console.log(bob); // { id: 2, name: "Bob" }
```

---

# 🚀 6️⃣ `sort`

✅ **Used for:** Sorting elements (mutates original array).

```javascript
const scores = [40, 100, 1, 5, 25, 10];

scores.sort((a, b) => a - b);

console.log(scores); // [1, 5, 10, 25, 40, 100]
```

---

# 🚀 7️⃣ `every`

✅ **Used for:** Check if **all** elements pass a test.

```javascript
const allAdults = [22, 34, 19].every((age) => age >= 18);

console.log(allAdults); // true
```

---

# 🚀 8️⃣ `some`

✅ **Used for:** Check if **any** element passes a test.

```javascript
const hasMinor = [22, 34, 15].some((age) => age < 18);

console.log(hasMinor); // true
```

---

# 🚀 Example of writing your **own higher-order function**

✅ **Takes a function as argument**

```javascript
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// Output: 0 1 2
```

✅ **Returns a function**

```javascript
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);

console.log(double(5)); // 10
console.log(double(8)); // 16
```

---

Absolutely! 🎯
Let’s go through **JavaScript asynchronous programming** step by step — with simple explanations and examples.

---

# 🚀 What is Asynchronous JavaScript?

✅ JavaScript is **single-threaded** (it executes one thing at a time).
But it handles **asynchronous operations** (like API calls, timers, file loading) using the **event loop**, allowing it to do other things while waiting.

Common async tasks:

- Fetching data from a server (AJAX / fetch)
- Timers (`setTimeout`, `setInterval`)
- Reading files (Node.js)
- Listening to events (clicks, responses)

---

# ⏳ Ways to handle Asynchronous code

## 1️⃣ Callbacks

Pass a function to be called **after** the async operation finishes.

```javascript
function sayHello() {
  console.log("Hello after 2 seconds");
}

setTimeout(sayHello, 2000); // waits 2s
```

Or inline:

```javascript
setTimeout(() => {
  console.log("Hello!");
}, 2000);
```

---

## 2️⃣ Promises

A **promise** is an object representing a value that may be available **now, later, or never.**

```javascript
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed!");
  }
});

promise
  .then((result) => console.log(result)) // runs on resolve
  .catch((error) => console.error(error)); // runs on reject
```

---

## 3️⃣ `fetch` example

Using promises to get data from an API.

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---

## 4️⃣ `async` / `await`

Make asynchronous code look synchronous.
You **must use `await` inside an `async` function**.

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}

getUsers();
```

---

# 🚦 Event Loop: How does JS handle async?

- JS puts async tasks (timers, fetch) into the **Web APIs**.
- When done, they move to the **callback queue**.
- The **event loop** puts them into the call stack when the stack is empty.

✅ That’s why logs often appear **after other synchronous code**.

---

# 📝 Examples of all together

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("Promise microtask"));

console.log("End");
```

**Output order:**

```
Start
End
Promise microtask
Timeout callback
```

✅ Because:

- Promises (`.then`) run as **microtasks** (before timers).
- `setTimeout` runs in the **next event loop cycle**.

---

# ⚡ Summary Cheatsheet

| Feature        | How                            |
| -------------- | ------------------------------ |
| Callback       | `setTimeout(() => {}, 1000);`  |
| Promise        | `new Promise(resolve, reject)` |
| `.then/.catch` | `promise.then().catch()`       |
| async / await  | `await someAsyncFunc();`       |
| fetch API      | `fetch(url).then().catch()`    |

---

✅ Great question!
The main \*\*modern alternative to using **explicit Promises with `.then()` and `.catch()`** in JavaScript is:

---

# 🚀 `async` / `await`

This is **not a replacement for Promises**, but a **syntactic alternative**.
Under the hood, `async` / `await` still uses Promises — it just makes your code look synchronous and easier to read.

### ✅ Example with Promises

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

---

### 🚀 Same with `async` / `await`

```javascript
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();
```

✅ **Cleaner, looks synchronous**, but does exactly what Promises do internally.

---

# ✨ Other alternatives to explicit Promise chaining

## 1️⃣ Generators (advanced)

Using generator functions with `yield`, often managed by libraries like `co` (for Node.js).
Rare today, since `async`/`await` replaced them for most use cases.

```javascript
function* myGenerator() {
  yield "Hello";
  yield "World";
}

const gen = myGenerator();
console.log(gen.next().value); // Hello
console.log(gen.next().value); // World
```

---

## 2️⃣ Reactive libraries

Like **RxJS** (`Observable` streams) — popular in Angular.

```javascript
import { of } from "rxjs";
of(1, 2, 3).subscribe((value) => console.log(value));
```

But this is **overkill** for most simple async tasks.

---

## 3️⃣ Old style: Callbacks

Before Promises, developers used **callback functions** to handle async.

```javascript
function loadData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 1000);
}

loadData((result) => console.log(result));
```

But callbacks can lead to **callback hell** (nested callbacks) and are harder to manage.

---

# 🔥 Summary: Most common alternative

✅ **Use `async` / `await` instead of explicit `then` / `catch`.**
It’s the same concept — just written differently, more readable, easier to handle errors with `try / catch`.

---
