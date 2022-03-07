const array = [1, 2, 3, 2, 4, 5, 3, 8, 12, 10, 3, 15];

array.sort((a, b) => a - b);

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

// O(log k n)
function countCertainElements(arr, elem) {
  const posElem = binarySearchElement(arr, elem);

  if (posElem === -1) {
    return 0;
  }

  let i = posElem;
  while (arr[i] === elem) {
    i--;
  }

  let j = posElem;
  while (arr[j] === elem) {
    j++;
  }

  return j - i - 1;
}

console.log(countCertainElements(array, 3));
console.log(countCertainElements(array, 17));
