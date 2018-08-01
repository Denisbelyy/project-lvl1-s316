import readlineSync from 'readline-sync';
import { getRandomNumber } from '../brain-math';
import { isEven } from '../brain-pairs';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = readlineSync.question('May I have your name? ');
  const gamePlay = (count) => {
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const failed = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    if (correctAnswer === userAnswer) {
      console.log('Correct!\n');
      return gamePlay(count + 1);
    }
    return console.log(failed);
  };
  return gamePlay(0);
};

export default brainEven;
