mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  let middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

merge = (left, right) => {
  let container = [];

  while (left.length || right.length) {
    if (left[0] > right[0] || left[0] === undefined) {
      container.push(right.shift());
    } else {
      container.push(left.shift());
    }
  }

  return container;
};

module.exports = mergeSort;