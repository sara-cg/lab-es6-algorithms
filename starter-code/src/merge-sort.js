/*jshint esversion:6*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  let array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  // array.slice() with no arguments is a trick to make a copy of the array
  // .concat is to smash all of the arrays together
  // ...maybe there's an ES6 way to do this?
  //return array.concat(left.slice()).concat(right.slice());
 return [...array, ...left, ...right];
}

module.exports = mergeSort;
