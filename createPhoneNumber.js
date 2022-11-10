function createPhoneNumber(numbers){
  let string = `(`;
  for (let i = 0; i < numbers.length; i++) {
    string += numbers[i];
    if (i === 2) {
      string += `) `;
    }
    if (i === 5) {
      string += `-`;
    }
  }
  return string;
};