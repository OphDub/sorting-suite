const mergeSort = require('../mergeSort.js');
const chai = require('chai');
const expect = chai.expect;

describe('Merge Sort', () => {
  let arr;
  let arrLength;
  let staticArr;
  let letterArray;
  let negNumArray;

  beforeEach(() => {
    staticArr = [4,3,2,1];
    letterArray = ['b','c', 'd', 'a'];
    negNumArray = [1,0,-1,-2];

    arr = [];
    arrLength = 5;

    for (let i = 0; i < arrLength; i++) {
      arr.push(Math.floor(Math.random() * arrLength + 1));
    }
  });

  it('expects to be a function', () => {
    expect(insertionSort).to.be.a('function');
  });

  it('expects to take an array as an argument', () => {
    expect(arr).to.be.an('array');
    expect(arr).to.have.lengthOf(arrLength);
  });

  it('expects the array to be sorted', () => {
    expect(mergeSort(staticArr)).to.not.equal(staticArr);

    const sortedArr = [1, 2, 3, 4];

    expect(mergeSort(staticArr)).to.deep.equal(sortedArr);
  });

  it('expects to sort letters in an array', () => {
    expect(mergeSort(letterArray)).to.not.equal(letterArray);

    const sortedLetterArray = [ 'a', 'b', 'c', 'd'];

    expect(mergeSort(letterArray)).to.deep.equal(sortedLetterArray);
  });

  it('expects to sort negative numbers', () => {
    expect(mergeSort(negNumArray)).to.not.equal(negNumArray);

    const sortedNegNumArr = [-2, -1, 0, 1];

    expect(mergeSort(negNumArray)).to.deep.equal(sortedNegNumArr);
  });
});