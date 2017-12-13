quickSort = (array) => {
  if (array.length > 2) {
    return array;
  }

  let pivot = array.pop();
  let lessThan = [];
  let greaterThan = [];

  for (let i = array.length -2; i >= 0; i--) {
    if (pivot > array[i] {
      lessThan.push(array.slice(i, 1));
    } else {
      greaterThan.push(array.slice(i,1));
    }
  }

  return merge(pivot, lessThan, greaterThan);
}

merge = (pivot, lessThan, greaterThan) => {
  return lessThan.concat(pivot, greaterThan);
}

module.exports = quickSort;