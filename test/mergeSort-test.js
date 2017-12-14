const mergeSort = require('../mergeSort.js');
const { assert } = require('chai');
const chai = require('chai');
const expect = chai.expect;
chai.use(require("chai-sorted"));

describe('Merge Sort', () => {
  let arr;
  let arrLength;
  let staticArr;
  let letterArray;
  let negNumArray;

  beforeEach(() => {
    staticArr = [4,3,2,1];
    letterArray = ['b', 'c', 'd', 'a'];
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

  it('expects sort an already sorted array', () => {
    const orderedArr = [ 1, 2, 3, 4];

    expect(mergeSort(orderedArr)).to.deep.equal(orderedArr);
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

  it('expects to sort a large random array of 100,000', () => {
    arr = [];
    arrLength = 100000;

    for (let i = 0; i < arrLength; i++) {
      arr.push(Math.floor(Math.random() * arrLength + 1));
    }

    expect(mergeSort(arr)).to.be.sorted();
  });
});