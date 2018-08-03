import getRandomNumber from '../random-number';
import gamePlay from '../gamePlay';
import { cons } from '../brain-pairs';

const description = 'Find the greatest common divisor of given numbers.';
const isDivisor = (num, divisor) => num % divisor === 0;

const searchDivisor = (firstNumber, secondNumber) => {
  const divider = [];
  const fewerNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  for (let i = 0; i < fewerNumber; i += 1) {
    if (isDivisor(firstNumber, i) && isDivisor(secondNumber, i)) {
      divider.push(i);
    }
  }
  return divider[divider.length - 1];
};
const generatorQuestions = () => {
  const firstNum = getRandomNumber(2, 50);
  const secondNum = getRandomNumber(2, 50);
  const correctAnswer = String(searchDivisor(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return cons(question, correctAnswer);
};
const brainGcd = () => gamePlay(description, generatorQuestions);

export default brainGcd;
