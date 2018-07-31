import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello! ${userName} :)\n`);
};

const selfRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  const gamePlay = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
    const currentNum = selfRandom(1, 100);
    const correctAnswer = currentNum % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${currentNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const failed = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    if (correctAnswer === userAnswer) {
      console.log('Correct!\n');
      return gamePlay(acc + 1);
    }
    console.log(failed);
    return false;
  };
  return gamePlay(0);
};
