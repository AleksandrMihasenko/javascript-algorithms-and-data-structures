// O(n^3)
function countSteps(n) {
  if (n < 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  return countSteps(n - 1) + countSteps(n - 2) + countSteps(n - 3);
}

// O(n)
function countStepsWithCache(n, cache = []) {
  if (n < 0) {
    return 0;
  }

  if (!cache[n]) {
    if (n === 0) {
      return 1;
    } else {
      return countSteps(n - 1, cache) + countSteps(n - 2, cache) + countSteps(n - 3, cache);
    }
  }

  return cache[n];
}

console.log(countSteps(4));
console.log(countStepsWithCache(4));
