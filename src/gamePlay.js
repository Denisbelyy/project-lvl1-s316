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
export const greeting = (descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descGame}.\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}\n`);
};
export const round = (question, correctAnswer, userName) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (correctAnswer === userAnswer) {
    console.log('Correct!\n');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  return false;
}
