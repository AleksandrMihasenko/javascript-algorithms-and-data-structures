// binary search

const array = [1, 2 , 3, 4, 5, 6, 7, 8, 9];

//O(n);
function searchElement(arr, elem) {

  for (let i = 0; i < array.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

// O(log n)
function binarySearchElement(arr, elem) {
  let start = 0;
  let end = arr.length;

  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === elem) {
      return mid;
    }

    if (arr[mid] > elem) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return -1;
}


console.log(searchElement(array, 2));
console.log(binarySearchElement(array, 2));
console.log(searchElement(array, 11));
console.log(binarySearchElement(array, 11));
