import readlineSync from 'readline-sync';
import {
  getRandomNumber,
  mathOperation,
} from '../brain-math';
import { makeQuestion, getFirstNum, getSecondNum } from '../brain-pairs';
import {
  brainGamesDesc,
  getUserName,
  isCorrect,
  failed,
} from '..';

const brainCalc = () => {
  brainGamesDesc('What is the result of the expression?');
  const userName = getUserName();
  const operators = ['+', '-', '*'];
  const gamePlay = (count, operator) => {
    if (count === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const Question = makeQuestion(getRandomNumber(1, 50), getRandomNumber(1, 50));
    const firstNum = getFirstNum(Question);
    const secondNum = getSecondNum(Question);
    const correctAnswer = mathOperation(firstNum, secondNum, operator[count]);
    console.log(`question: ${firstNum} ${operator[count]} ${secondNum}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (!isCorrect(correctAnswer, userAnswer)) {
      return failed(correctAnswer, userAnswer, userName);
    }
    return gamePlay(count + 1, operators);
  };
  return gamePlay(0, operators);
};

export default brainCalc;
