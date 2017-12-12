const bubbleSort = require('../bubbleSort.js');
const chai = require('chai');
const expect = chai.expect;

describe('Bubble Sort', () => {
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
    arrLength = 9000;

    for (let i = 0; i < arrLength; i++) {
      arr.push(Math.floor(Math.random() * arrLength + 1));
    }
  })

  it('expects to be a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('expects to take an array as an argument', () => {
    expect(arr).to.be.an('array');
    expect(arr).to.have.lengthOf(arrLength);
    expect(arr[0]).to.be.a('number');
  });

  it('expects the array to be unsorted', () => {
    expect(staticArr[0]).to.equal(4);
    expect(staticArr[1]).to.equal(3);
    expect(staticArr[0]).to.be.greaterThan(staticArr[1]);
   
    bubbleSort(staticArr);
   
    expect(staticArr[0]).to.equal(1);
    expect(staticArr[1]).to.equal(2);
    expect(staticArr[1]).to.be.greaterThan(staticArr[0]);
  });

  it('expects to continue to sort the entire array', () => {
    bubbleSort(staticArr);
    expect(staticArr[0]).to.equal(1);
  });

  it('expects to sort letters in an array', () => {
    expect(letterArray[0]).to.equal('b');
    expect(letterArray[1]).to.equal('c');
  
    bubbleSort(letterArray);

    expect(letterArray[1]).to.equal('b');
    expect(letterArray[2]).to.equal('c');
  });

  it('expects to sort negative numbers', () => {
    expect(negNumArray[0]).to.equal(1);
    expect(negNumArray[1]).to.equal(0);

    bubbleSort(negNumArray);

    expect(negNumArray[0]).to.equal(-2);
    expect(negNumArray[1]).to.equal(-1);
  });

  it('expects to handle a large random array', () => {
    bubbleSort(arr);
    expect(arr.length).to.equal(9000);
  });
});