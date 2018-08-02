import { getRandomNumber } from '../brain-math';
import { brainGamesDesc, round, getUserName } from '../gamePlay';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  brainGamesDesc('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (!round(question, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
