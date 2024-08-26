### What is the difference between undefined and not defined in JavaScript?

When you declare a variable without assigning a value to it, if you try to log or access that variable, it will return undefined. For example:

```javascript
let x;
console.log(x); // Output: undefined
```

In this case, x is declared but not assigned a value, so logging x will result in undefined.

However, if you try to access a variable that has not been declared at all, you will encounter a ReferenceError, indicating that the variable is not defined. For example:

```javascript
console.log(y); // ReferenceError: y is not defined
```

In this case, y has not been declared anywhere in the code, so trying to access it will result in a ReferenceError.

### What is a "closure" in JavaScript?

A closure in JavaScript is indeed a function that has access to its own scope, the scope of its containing (parent) function, and the global scope.

### Does using delete operator to delete an item of array change the length of an array?

If we use the delete operator to remove an item from an array in JavaScript, it will indeed delete the element, but it will leave an empty space at the position where the element was removed. This empty space will be represented as undefined. However, the length of the array will remain the same.
Here's an example to illustrate:

```javascript
let array = [1, 2, 3, 4, 5];
delete array[2]; // Removes the element at index 2

console.log(array); // Output: [1, 2, undefined, 4, 5]
console.log(array.length); // Output: 5
```
As you can see, the element at index 2 is removed, but the length of the array remains the same, and the deleted element is replaced with undefined.

### How can we perfectly remove an item from an array?

To effectively remove an item from an array and adjust its length, you can use methods like splice() or filter out the item. For example:

Using splice():

```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Removes one element at index 2

console.log(array); // Output: [1, 2, 4, 5]
console.log(array.length); // Output: 4
```

Using filter():

```javascript
let array = [1, 2, 3, 4, 5];
array = array.filter((item, index) => index !== 2);

console.log(array); // Output: [1, 2, 4, 5]
console.log(array.length); // Output: 4
```
Both of these methods will remove the item from the array and adjust its length accordingly.

### What is the difference between == and ===?

- == checks for equality after type coercion (conversion). In JavaScript, == (loose equality operator) compares two values after converting them to a common type. It does not consider the data type of the operands if they are different.

- === checks for equality without type coercion. It compares both the value and the data type. === (strict equality operator) also compares the values of two operands, but it additionally checks whether the operands are of the same data type. It returns true only if the values are equal and of the same type. 

### Explain function expression?

- A function expression is where an anonymous or named function is assigned to a variable. Function expressions provide flexibility and allow functions to be treated as first-class citizens in JavaScript. They can be passed as arguments to other functions, returned from functions, and assigned to variables, making them essential for functional programming paradigms. Additionally, they are often used in scenarios where a function is only needed in a specific context or scope.

### Explain function declaration?

- A function declaration is where a function is declared that can be called anywhere within its scope. It is hoisted a the top of the scope during compilation so it can be called before the declaration. It is normally created to be reused multiple times within a script. It is important to note that any variable assignment and function expression inside the function declaration is not hoisted. 

### What is Scope in JavaScript?
Scope in JavaScript refers to the context in which variables, functions, and objects are accessible within a program.

Types of scope:

- Global Scope: Variables declared outside of any function or block have global scope. Global variables are accessible from anywhere within the JavaScript program, including inside functions They are accessible to all functions and scripts running on the page.

- Local Scope: Variables declared inside a function or block have local scope. Local variables are only accessible within the function or block in which they are defined. They are not accessible from outside the function or block. Each function invocation creates a new scope, and variables declared within that function are limited to that scope.

- Lexical Scope (closure): A closure in JavaScript is indeed a function that has access to its own scope, the scope of its containing (parent) function, and the global scope. This allows inner functions to "remember" and access variables from their parent scopes even after the parent function has finished executing.

### What is the reason for wrapping the entire content of a JavaScript source file in a function block?

Wrapping the entire content of a JavaScript source file in a function block is a technique known as the Immediately Invoked Function Expression (IIFE). The primary reason for doing this is to create a private scope or context, often referred to as a module or namespace, to encapsulate variables and functions within that scope.

By encapsulating code within an IIFE, you can prevent potential naming conflicts with other scripts or libraries. Variables and functions declared within the IIFE are not accessible from the outside world, helping to avoid pollution of the global namespace.

### Why would you use use strict at the beginning of a JavaScript source file?

Using strict is a way to enforce strict parsing and error handling of the JavaScript code at runtime. Strict mode helps in following:

- Catch Common Coding Errors: Strict mode helps catch common coding errors and unsafe actions, such as using undeclared variables, assigning values to read-only properties.

- Makes Debugging Easier: It makes debugging easier by identifying problematic code early and throwing more exceptions.

- Prevents Implicit Globals: In non-strict mode, assigning a value to an undeclared variable creates a global variable. Strict mode prevents this behavior, helping to avoid accidental pollution of the global namespace.

- Eliminates Silent Errors: In strict mode, certain actions that would have been silently ignored or failed silently in non-strict mode will now throw errors. For example, attempting to delete a variable or function will throw an error in strict mode.

- Enhances Security: It helps to write more secure code by disabling some features that are potentially dangerous, such as with statements and eval expressions with access to the local scope.

- Improves Performance: In some cases, strict mode code can be optimized more effectively by JavaScript engines, leading to potential performance improvements

### What is the difference between a method and a function in javascript?

In JavaScript, the terms "method" and "function" are often used interchangeably, but there is a subtle difference between them:

- Function: A function in JavaScript is a block of reusable code that performs a specific task. Functions can be standalone entities or assigned to variables, passed as arguments to other functions, or returned from other functions.

- Method: A method is a function that is associated with an object. It is defined as a property of an object, where the property's value is a function. Methods are invoked using dot notation (object.method()), and they typically operate on the object's data or properties. Methods can also access and modify the object's state.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
```
In this example, fullName is a method of the person object.


### What is JavaScript self-invoking anonymous function?

A self-invoking anonymous function in JavaScript is a function that is defined and immediately invoked within its own declaration. It is also known as an Immediately Invoked Function Expression (IIFE). The main characteristics of a self-invoking anonymous function are:

- Anonymous Function: It is declared without a name. Instead of using a function declaration or function expression, the function is defined within parentheses, making it an anonymous function.

- Self-Invoking: The function is invoked immediately after its definition. This is achieved by adding a pair of parentheses () immediately after the function expression, which triggers its execution.

```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```
```javascript

```



```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```
```javascript```