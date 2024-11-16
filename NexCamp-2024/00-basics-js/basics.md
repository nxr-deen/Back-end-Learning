# Javascript 
JavaScript is a dynamic programming language, meaning it is highly versatile and can execute many programming paradigms like procedural, object-oriented, and functional programming. It also allows variables, types, and objects to change at runtime , widely regarded as the world's most popular language, powering the Web and being easy to learn.

## Basics: Declaration and Types

### Variable Declaration
- **`var`**, **`let`**, and **`const`**:
  - `var`: Function-scoped, hoisted (old standard).
  - `let`: Block-scoped, not hoisted.
  - `const`: Block-scoped, read-only.

  ```javascript
  var globalVar = "I'm accessible anywhere";
  let blockScoped = "I exist within this block";
  const constantValue = 42; // Cannot be reassigned
  ```



### Data Types
- **Primitive Types**:
  - String, Number, Boolean, Null, Undefined, Symbol, BigInt.
  ```javascript
  let str = "Hello"; // String
  let num = 25;      // Number
  let isValid = true; // Boolean
  let empty = null;  // Null
  let undef;         // Undefined
  ```

- **Other Types**:
  ```javascript
  const person = { name: "Alice", age: 30 }; // Object
  const numbers = [1, 2, 3]; // Array
  ```


##  Mixing Strings and Variables
- **Syntax**: Use backticks (\``) and `${}` for interpolation.
  ```javascript
  const name = "John";
  const greeting = `Hello, ${name}! Welcome back.`;
  console.log(greeting); // "Hello, John! Welcome back."
  ```

  ```javascript
  console.log("Hello, ", name ,"! Welcome back.");
  ```



## Operators

### Arithmetic Operators
```javascript
let sum = 5 + 3;  // 8
let diff = 5 - 3; // 2
let prod = 5 * 3; // 15
let quotient = 5 / 3; // 1.6667
let remainder = 5 % 3; // 2
```

### Comparison Operators
```javascript
console.log(5 > 3); // true
console.log(5 === "5"); // false (strict equality) the type and the value
```

### Logical Operators
```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
```



## Control Structures

### `if`/`else`
```javascript
const age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### `switch` Case
```javascript
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Almost weekend");
        break;
    default:
        console.log("Midweek");
}
```

### Loops
- **`for` Loop**:
  ```javascript
  for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```
- **`while` Loop**:
  ```javascript
  let count = 0;
  while (count < 5) {
      console.log(count);
      count++;
  }
  ```



## Objects

### Properties and Methods
```javascript
const car = {
    brand: "Tesla",
    model: "Model 3",
    start() {
        console.log(`${this.brand} ${this.model} is starting.`);
    }
};
car.start(); // "Tesla Model 3 is starting."
```



## Functions

### Declaration and Expressions
```javascript
function sayHello(name) {
    return `Hello, ${name}`;
}

const greet = function(name) {
    return `Hi, ${name}`;
};

const arrowGreet = (name) => `Hey, ${name}`;
```



## Higher-Order Functions

### `map`, `filter`, `reduce`
```javascript
const nums = [1, 2, 3];

// Double each number
const doubled = nums.map(num => num * 2); // [2, 4, 6]

// Filter out odd numbers
const evens = nums.filter(num => num % 2 === 0); // [2]

// Sum all numbers
const sum = nums.reduce((total, num) => total + num, 0); // 6
```

