import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const isDivisor = (num, divisor) => num % divisor === 0;
const stopForeachDivisor = 1;
const searchDivisor = (firstNumber, secondNumber) => {
  const fewerNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  for (let i = fewerNumber - 1; i > stopForeachDivisor; i -= 1) {
    if (isDivisor(firstNumber, i) && isDivisor(secondNumber, i)) {
      return i;
    }
  }
  return stopForeachDivisor;
};
const generateGameData = () => {
  const firstNum = getRandomNumber(2, 50);
  const secondNum = getRandomNumber(2, 50);
  const correctAnswer = String(searchDivisor(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return cons(question, correctAnswer);
};
const brainGcd = () => gamePlay(description, generateGameData);

export default brainGcd;
