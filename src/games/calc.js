import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const mathOperation = (a, b, operator) => {
  switch (operator) {
    case '+': {
      return a + b;
    }
    case '-': {
      return a - b;
    }
    case '*': {
      return a * b;
    }
    default: {
      return console.log('error! undefined operator');
    }
  }
};
const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const generateGameData = () => {
  const firstNum = getRandomNumber(1, 50);
  const secondNum = getRandomNumber(1, 50);
  const randomOperators = operators[getRandomNumber(0, operators.length - 1)];
  const correctAnswer = String(mathOperation(firstNum, secondNum, randomOperators));
  const question = `${firstNum} ${randomOperators} ${secondNum}`;
  return cons(question, correctAnswer);
};

const brainCalc = () => gamePlay(description, generateGameData);

export default brainCalc;
