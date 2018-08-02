import {
  getRandomNumber,
  mathOperation,
} from '../brain-math';
import { makeQuestion, getFirstNum, getSecondNum } from '../brain-pairs';
import {
  greeting,
  round,
  getUserName,
  endGame,
} from '../gamePlay';

const brainCalc = () => {
  greeting('What is the result of the expression?');
  const userName = getUserName();
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const Question = makeQuestion(getRandomNumber(1, 50), getRandomNumber(1, 50));
    const firstNum = getFirstNum(Question);
    const secondNum = getSecondNum(Question);
    const correctAnswer = String(mathOperation(firstNum, secondNum, operators[i]));
    const question = `${firstNum} ${operators[i]} ${secondNum}`;
    if (!round(question, correctAnswer, userName)) {
      return;
    }
  }
  endGame(userName);
};

export default brainCalc;
