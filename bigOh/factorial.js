// Define a function named factorial that computes the factorial of a number n
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(factorial(0)); // Output: 1 (by convention, 0! = 1)
console.log(factorial(1)); // Output: 1 (1! = 1)
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
