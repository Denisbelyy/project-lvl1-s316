import readlineSync from 'readline-sync';
import { getRandomNumber } from '../brain-math';
import { isEven } from '../brain-pairs';
import {
  brainGamesDesc,
  getUserName,
  isCorrect,
  failed,
} from '..';

const brainEven = () => {
  brainGamesDesc('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();

  const gamePlay = (count) => {
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isCorrect(correctAnswer, userAnswer)) {
      return gamePlay(count + 1);
    }
    return failed(correctAnswer, userAnswer, userName);
  };
  return gamePlay(0);
};

export default brainEven;
