quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = array.length - 2; i >= 0; i--) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return mergeBack (pivot, quickSort(left), quickSort(right));
};

mergeBack = (pivot, left, right) => {
  return left.concat(pivot, right);
};

module.exports = quickSort;