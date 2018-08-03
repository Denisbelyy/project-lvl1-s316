import readlineSync from 'readline-sync';
import { car, cdr } from './brain-pairs';

const gamePlay = (desc, generatorQuestions) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${desc}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}\n`);
  const maxForeach = 3;
  for (let i = 0; i < maxForeach; i += 1) {
    const newQuestion = generatorQuestions();
    const question = car(newQuestion);
    const correctAnswer = cdr(newQuestion);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!\n');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default gamePlay;
