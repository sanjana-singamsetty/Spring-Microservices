**Parameters:**  
The function accepts a single parameter, which can be an array, object, or any message.

**Return Value:**  
The function returns the value of the parameter passed to it.

For example, using `console.log()` to pass a message will display that message in the console:

```js
console.log("Hello Geeks");
```

---

### What is a Variable?

A variable is a named container for storing data or information. Variables allow you to keep values—such as text, numbers, or more complex data structures—that can be accessed and manipulated throughout your code.

For example, in an e-commerce application, you might store information about products added to a wishlist or cart. JavaScript uses variables to manage and reference this data efficiently.

#### How to Create Variables

There are three main ways to declare variables in JavaScript: `var`, `let`, and `const`. Each has its own use case and scope rules.

#### Declaring Variables with `var`

The `var` keyword declares a variable:

```js
var product = "Laptop";
```

#### Declaring Variables with `let`

The `let` keyword is a modern way to declare variables and is generally preferred over `var` due to its block-scoping feature:

```js
let quantity = 3;
```

#### Declaring Variables with `const`

The `const` keyword declares variables that are meant to be constants, meaning their values should not change once assigned:

```js
const storeName = "TechShop";
```

With `const`, you must assign a value at the time of declaration, and this value cannot be changed later.

#### Variable Assignment and Re-assignment

Variables declared with `var` and `let` can be reassigned new values, while variables declared with `const` cannot.

#### Why Use `let` and `const` over `var`?

- **Block Scoping:** `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined. `var` is function-scoped, which can lead to unexpected behavior.
- **Re-assignment:** `const` ensures that variables cannot be reassigned, which helps prevent accidental changes to important values.

JavaScript has **two main categories** of data types:

---

## 🔹 1. **Primitive Data Types** (Immutable, stored by value)

These are the most basic types in JavaScript:

| Type          | Example                                     | Description                       |
| ------------- | ------------------------------------------- | --------------------------------- |
| **String**    | `"hello"`                                   | Text or characters                |
| **Number**    | `42`, `3.14`                                | All numbers (integers & floats)   |
| **BigInt**    | `1234567890123456789012345678901234567890n` | For large integers                |
| **Boolean**   | `true`, `false`                             | Logical values                    |
| **Undefined** | `undefined`                                 | Declared but not assigned a value |
| **Null**      | `null`                                      | Explicitly no value               |
| **Symbol**    | `Symbol("id")`                              | Unique identifiers                |

### ✅ Characteristics:

- Stored directly in the variable
- **Immutable**: cannot be changed (though you can reassign a variable)

---

## 🔸 2. **Non-Primitive (Reference) Data Types**

These are more complex and stored **by reference**:

| Type         | Example                        | Description                              |
| ------------ | ------------------------------ | ---------------------------------------- |
| **Object**   | `{ name: "Sanjana", age: 22 }` | Collection of key–value pairs            |
| **Array**    | `[1, 2, 3]`                    | Ordered collection                       |
| **Function** | `function() {}`                | Reusable block of code                   |
| **Date**     | `new Date()`                   | Built-in object to handle dates/times    |
| **RegExp**   | `/abc/`                        | Regular expressions for pattern matching |

### ✅ Characteristics:

- Stored in memory and referenced by variables
- **Mutable**: their contents can be changed

---

## 🧠 Bonus: `typeof` Operator

You can check types like this:

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  // (this is a known quirk in JS)
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"
```

---

### ✅ Summary Table:

| Category          | Data Types                                                             |
| ----------------- | ---------------------------------------------------------------------- |
| **Primitive**     | `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, `Symbol` |
| **Non-Primitive** | `Object`, `Array`, `Function`, `Date`, `RegExp`                        |

---

### What is Nullish Coalescing (`??`)?

The nullish coalescing operator (`??`) assigns a default value to a variable when the value is either `null` or `undefined`. This is useful when you want to provide a fallback value only for `null` or `undefined`, but keep values like `0` or an empty string (`""`) intact.

**Syntax:**

```js
let result = value ?? defaultValue;
```

- If `value` is neither `null` nor `undefined`, it returns `value`.
- If `value` is `null` or `undefined`, it returns `defaultValue`.

**Example:**

```js
const firstName = "Prakash";
console.log(firstName ?? "Hidden Geek"); // Output: "Prakash"
```

In this example, since `firstName` is not null or undefined, the output is "Prakash". If `firstName` was null or undefined, the output would have been "Hidden Geek".

Now, let’s test how it works when `firstName` is undefined:

```js
let firstName; // `firstName` is undefined
console.log(firstName ?? "Hidden Geek"); // Output: "Hidden Geek"
```

Here, `firstName` is undefined, so the nullish coalescing operator assigns the default value "Hidden Geek".

**Case of Empty String:**  
Nullish coalescing does not treat an empty string (`""`) as a falsy value. This is different from the OR (`||`) operator, which would consider an empty string as falsy.

```js
let firstName = "";
console.log(firstName ?? "Hidden Geek"); // Output: ""
```

In this case, the empty string is not null or undefined, so the output remains as an empty string. If we used the OR operator (`||`), it would return "Hidden Geek" since the empty string is considered falsy by OR.

---

### Difference Between `??` and `||`

Let’s now compare nullish coalescing (`??`) with the OR (`||`) operator.

**OR (`||`) Operator:**  
The OR operator returns the first truthy value in an expression. It will treat values like `0`, `""` (empty string), `null`, and `undefined` as falsy values.

```js
let firstName = "";
console.log(firstName || "Hidden Geek"); // Output: "Hidden Geek"
```

---

## Array Methods

JavaScript provides various array methods to manipulate data:

### `map`

Creates a new array with the results of calling a function for every array element:

```js
let upperCaseNames = studentNames.map((name) => name.toUpperCase());
console.log(upperCaseNames); // Output: ["ASHISH", "ADARSH"]
```

### `filter`

Creates a new array with elements that pass a test provided by a function:

```js
let longNames = studentNames.filter((name) => name.length > 5);
console.log(longNames); // Output: ["Ashish", "Adarsh"]
```

### `reduce`

Used to reduce the array into one single value using some functional logic:

```js
const array = [1, 2, 3, 4, 5, 6];
const helperSum = (acc, curr) => acc + curr;
const sum = array.reduce(helperSum, 0);

console.log(array);
console.log(sum);
```

### `some`

Checks whether some array values pass a test:

```js
const array = [1, 2, 3, 4, 5, 6];
const lessThanFourCheck = (element) => element < 4;
const lessThanFour = array.some(lessThanFourCheck);

console.log(array);
if (lessThanFour) {
  console.log("At least one element is less than 4");
} else {
  console.log("All elements are greater than 4");
}
```

**Output:**

```
[1, 2, 3, 4, 5, 6]
At least one element is less than 4
```

---

### `slice()` Method

The `arr.slice()` method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

**Syntax:**

```js
arr.slice(begin, end);
```

- `begin`: The starting index from where the portion is to be extracted. Defaults to 0 if omitted.
- `end`: The index up to which the portion is to be extracted (excluding the end index). If omitted, extracts to the end of the array.

**Return value:**  
A new array containing some portion of the original array.

**Example:**

```js
function func() {
  // Original Array
  var arr = [23, 56, 87, 32, 75, 13];
  // Extracted array
  var new_arr = arr.slice(2, 4);
  console.log(arr);
  console.log(new_arr);
}
func();
```

**Output:**

```
[23, 56, 87, 32, 75, 13]
[87, 32]
```
