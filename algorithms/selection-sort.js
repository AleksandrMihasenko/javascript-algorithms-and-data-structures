// O(n * n)
function findSmallestIndex(arr) {
  let smallestElement = arr[0];
  let smallestIndex = 0;

  for (let [index, value] of arr.entries()) {
    if (arr[index] < smallestElement) {
      smallestElement = value;
      smallestIndex = index;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let array = [...arr];
  let sortedArray = [];

  arr.forEach(() => {
    let smallestIndex = findSmallestIndex(array);

    sortedArray.push(array.splice(smallestIndex, 1)[0]);
  })

  return sortedArray;
}

console.log(selectionSort([2, 4, 1, 9]));
