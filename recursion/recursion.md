# Understanding Recursion

## Introduction

Recursion is a fundamental programming concept where a function calls itself to solve a problem. It can simplify complex problems by breaking them down into smaller, more manageable sub-problems. In a recursive function, there are typically two main parts:

1. **Base Case**: The condition under which the function stops calling itself. This prevents infinite recursion and eventual stack overflow.
2. **Recursive Case**: The part of the function where it calls itself with a modified argument, moving towards the base case.

## How Recursion Works

Recursion can be visualized as a series of function calls stacked on top of each other. Each call waits for the next one to complete before it can return its result.

### Example: Factorial

The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`. It is denoted by `n!`. For example, `5! = 5 * 4 * 3 * 2 * 1 = 120`.

Here's how you can compute the factorial using recursion:

```javascript
function factorial(n) {
  // Base case: if n is 0, return 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

// Usage
console.log(factorial(5)); // Output: 120
```
