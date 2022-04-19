// mergesort

function mergesort(array) {
  if (array.length < 2) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    sortedArray.push(leftArray[i] < rightArray[j] ? leftArray[i++] : rightArray[j++]);
  }

  return [...sortedArray, ...leftArray.slice(i), ...rightArray.slice(j)];
}

console.log(mergesort([2, 5, 1, 7]));
