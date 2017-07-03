/*jshint esversion:6*/

class ArrayFunction{

// 1) Define a function that takes an array with numbers and prints all the elements of the array, separated by " --- "
// ArrayFunctions.printSpecial([12, 33, 144, 122])
// 12 -- 33 -- 144 -- 122

printSpecial (array) {
  return array.join(" --- ");
}
// 2) Define a function that takes an array with numbers and returns another array where each element contains double each element in the array
// ArrayFunctions.doubleMyArray([10, 20, 35, 12])
// [20, 40, 70, 24]

doubleArray (array){
  return array.map(number => number * 2);
}

// 3) Define a function that takes an array with numbers and returns the result of multiplying each element by ten to the power of the position it's in:
// ArrayFunctions.superPower([1,2,3,4,5])
// 54321
// explanation: (1 x 10^0) + (2 x 10^1) + (3 x 10^2) + (4 x 10^3) + (5 x 10^4)
// explanation: (1)        + (20)       + (300)      + (4000)     + (50000)

superPower (array){
  return array.reduce((sum, number, index) => {return sum + (number * (Math.pow(10, index)))});
}
}
module.exports = ArrayFunction;
