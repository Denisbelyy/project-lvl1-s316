export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getSum = (a, b) => a + b;

export const getSubstraction = (a, b) => a - b;

export const getMulti = (a, b) => a * b;

export const mathOperation = (a, b, operator) => {
  if (operator === '+') {
    return getSum(a, b);
  }
  if (operator === '-') {
    return getSubstraction(a, b);
  }
  if (operator === '*') {
    return getMulti(a, b);
  }
  return console.log('error! undefined operator');
};
