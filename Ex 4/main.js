// 1. Function Basics (function declaration)
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));        // 5
console.log(add(-4, 10));      // 6
console.log(add(1.5, 2.5));    // 4
console.log(add("Hello, ", "World")); // "Hello, World" (string concatenation)
console.log(add("5", 3));      // "53" (type coercion, not 8)


// 2. Function Expression
const addExpression = function (a, b) {
  return a + b;
};

console.log(addExpression(7, 8));     // 15
console.log(addExpression(0, 0));     // 0
console.log(addExpression(-2, -3));   // -5


// // 3. Arrow Function
// const addArrow = (a, b) => a + b;

// console.log(addArrow(10, 20));    // 30
// console.log(addArrow(-1, 1));     // 0
// console.log(addArrow(3.3, 1.1));  // 4.4 (actually 4.3999999999999995 due to floating point)
