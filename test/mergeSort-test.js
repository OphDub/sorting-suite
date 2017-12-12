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
});