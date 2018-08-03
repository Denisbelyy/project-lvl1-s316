import getRandomNumber from '../random-number';
import gamePlay from '../gamePlay';
import { cons } from '../brain-pairs';

const isDivisor = (num, divisor) => num % divisor === 0;
const getUniqueArr = (arr) => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        uniqueArr.push(arr[j]);
      }
    }
  }
  return uniqueArr;
};
const searchDivisor = (a, b) => {
  const iter = (acc, count, num) => {
    if (count === num) {
      return acc;
    }
    if (isDivisor(num, count)) {
      acc.push(count);
    }
    return iter(acc, count + 1, num);
  };
  const dividers = iter([], 0, a).concat(iter([], 0, b));
  const uniqueDividers = getUniqueArr(dividers);
  return uniqueDividers[uniqueDividers.length - 1];
};
const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const generatorQuestions = () => {
    const firstNum = getRandomNumber(2, 50);
    const secondNum = getRandomNumber(2, 50);
    const correctAnswer = String(searchDivisor(firstNum, secondNum));
    const question = `${firstNum} ${secondNum}`;
    return cons(question, correctAnswer);
  };
  return gamePlay(description, generatorQuestions);
};

export default brainGcd;
