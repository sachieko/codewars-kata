const sumTwoSmallestNumbers = function(numbers) {  
  let sortedNumbers = numbers.slice(0).sort((a, b) => a - b); // Slice to prevent mutation to original
  return sortedNumbers[0] + sortedNumbers[1];
};