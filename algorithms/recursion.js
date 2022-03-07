function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  //O(n)
  return n * factorial(n - 1);
}

function factorialWithoutRecursion(n) {
  const stack = [[n, 1]];

  while (stack.length > 0) {
    const [current, result] = stack.pop();

    if (current === 0 || current === 1) {
      return result;
    }
    stack.push([current - 1, result * current]);
  }
}

// O(n)
function factorialSimple(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorialWithoutRecursion(5));
console.log(factorialSimple(5));
