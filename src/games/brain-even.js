import readlineSync from 'readline-sync';
import { getRandomNumber } from '../brain-math';
import { greeting, round } from '../gamePlay';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const description = ('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return round(question, correctAnswer);
  }
};

export default brainEven;
name, desc, question, correctAnser;
