import readlineSync from 'readline-sync';

export const brainGamesDesc = (desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}\n`);
  return userName;
};

export const isCorrect = (CorrectAnswer, userAnswer) => {
  if (CorrectAnswer === userAnswer) {
    console.log('Correct!\n');
    return true;
  }
  return false;
};

export const failed = (correctAnswer, userAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};
