import readlineSync from 'readline-sync';

export const brainGamesDesc = (desc) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);
};

export const greeting = (descGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${descGame}.\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}\n`);
  return userName;
};
export const round = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === userAnswer) {
    console.log('Correct!\n');
    return true;
  }
  const congratulation = `Congratulations, ${userName}!`;
  const failed = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  console.log(congratulation);
  return console.log(failed);
}
export const endGame = (result) => {
  console.log(result);
}
