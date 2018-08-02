import {
  getRandomNumber,
  mathOperation,
} from '../brain-math';
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
    const firstNum = getRandomNumber(1, 50);
    const secondNum = getRandomNumber(1, 50);
    const correctAnswer = String(mathOperation(firstNum, secondNum, operators[i]));
    const question = `${firstNum} ${operators[i]} ${secondNum}`;
    if (!round(question, correctAnswer, userName)) {
      return;
    }
  }
  endGame(userName);
};

export default brainCalc;
