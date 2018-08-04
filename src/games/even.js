import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const isEven = number => number % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const generateGameData = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const brainEven = () => gamePlay(description, generateGameData);

export default brainEven;
