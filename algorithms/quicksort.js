// quicksort

function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[0];
  let less = array.slice(1).filter((elem) => {
    return elem <= pivot;
  });
  let greater = array.slice(1).filter((elem) => {
    return elem > pivot;
  });

  return quicksort(less).concat([pivot], quicksort(greater));
}

console.log(quicksort([2, 3, 5, 10]));
