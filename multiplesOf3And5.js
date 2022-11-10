const solution = function(number) {
  const multiples = [];
  let result = 0;
  if (number <= 0) {
    return result;
  }
  // generate all multiples of 3
  for (let i = 3; i < number; i += 3) {
    multiples.push(i);
  }
  // generate all multiples of 5
  for (let i = 5; i < number; i += 5) {
    multiples.push(i);
  }
  // Remove any that were a multiple of 3 AND 5 using set
  const numbersToSum = [...new Set(multiples)];
  for (const num of numbersToSum) {
    result += num;
  }
  return result;
};