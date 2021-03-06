const insertionSort = require('../insertionSort.js');
const chai = require('chai');
const expect = chai.expect;

describe('Insertion Sort', () => {
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

  it('expects the array to be unsorted', () => {
    expect(staticArr[0]).to.equal(4);

    insertionSort(staticArr);

    expect(staticArr[0]).to.equal(1);
  });

  it('expects to sort letters in an array', () => {
    expect(letterArray[0]).to.equal('b');
    expect(letterArray[1]).to.equal('c');

    insertionSort(letterArray);

    expect(letterArray[1]).to.equal('b');
    expect(letterArray[2]).to.equal('c');
  });

  it('expects to sort negative numbers', () => {
    expect(negNumArray[0]).to.equal(1);
    expect(negNumArray[1]).to.equal(0);

    insertionSort(negNumArray);

    expect(negNumArray[0]).to.equal(-2);
    expect(negNumArray[1]).to.equal(-1);
  });

  it('expects to sort a large random array of 12,000', () => {
    arr = [];
    arrLength = 12000;

    for (let i = 0; i < arrLength; i++) {
      arr.push(Math.floor(Math.random() * arrLength + 1));
    }

    expect(insertionSort(arr)).to.be.sorted();
  });
});