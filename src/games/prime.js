import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const description = 'Is this number prime?';
const isPrime = (number) => {
  const iter = (currentNumber) => {
    if (currentNumber === number) {
      return true;
    }
    if (number % currentNumber === 0 && currentNumber !== number) {
      return false;
    }
    return iter(currentNumber + 1);
  };
  return iter(2);
};
const generateGameData = () => {
  const number = getRandomNumber(2, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
const brainPrime = () => gamePlay(description, generateGameData);

export default brainPrime;
