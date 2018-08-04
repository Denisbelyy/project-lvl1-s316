import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';
import { isDivisor } from './gcd';

const description = 'Is this number prime?';
const isPrime = (number) => {
  const iter = (acc, count) => {
    if (acc > 2) {
      return false;
    }
    if (count === number) {
      return true;
    }
    return isDivisor(number, count) ? iter(acc + 1, count + 1) : iter(acc, count + 1);
  };
  return iter(0, 1);
};
const generateGameData = () => {
  const number = getRandomNumber(2, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
const brainPrime = () => gamePlay(description, generateGameData);

export default brainPrime;
