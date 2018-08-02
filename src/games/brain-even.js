import { getRandomNumber } from '../brain-math';
import {
  greeting,
  round,
  getUserName,
  endGame,
} from '../gamePlay';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  greeting('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (!round(question, correctAnswer, userName)) {
      return;
    }
  }
  endGame(userName);
};

export default brainEven;
