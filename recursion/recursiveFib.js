function recusrsiveFibbonacci(n) {
  if (n < 2) return n;
  return recusrsiveFibbonacci(n - 1) + recusrsiveFibbonacci(n - 2);
}

console.log(recusrsiveFibbonacci(0));
console.log(recusrsiveFibbonacci(1));
console.log(recusrsiveFibbonacci(6));

// Time complexity = 0(2^n)
