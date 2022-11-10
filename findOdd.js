const findOdd = function(arr) {
  return arr.filter(number => number === arr[0]).length % 2 === 1 ? arr[0] : findOdd(arr.filter(number => number !== arr[0]));
};