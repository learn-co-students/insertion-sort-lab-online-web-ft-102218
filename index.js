// Cost of Selection Sort is O(n^2)

function findMinAndRemove(array) {
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function selectionSort(array){
  // [1, 5, -2, 32, 0]
  // Find the lowest number in the array and add it to a new array
  // [-2]
  // Remove the value from the original array
  // [1, 5, 32, 0]
  // Repeat until the original array is empty!

  let sorted = [];
  while (array.length > 0) {
    sorted.push(findMinAndRemove(array));
  }
  console.log(sorted);
  return sorted;
}

selectionSort([1, 5, -2, 32, 0]);