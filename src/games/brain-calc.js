import getRandomNumber from '../random-number';
import gamePlay from '../gamePlay';
import { cons } from '../brain-pairs';

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

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const description = 'What is the result of the expression?';
  const generatorQuestions = () => {
    const firstNum = getRandomNumber(1, 50);
    const secondNum = getRandomNumber(1, 50);
    const randOperators = operators[getRandomNumber(0, operators.length - 1)];
    const correctAnswer = String(mathOperation(firstNum, secondNum, randOperators));
    const question = `${firstNum} ${randOperators} ${secondNum}`;
    return cons(question, correctAnswer);
  };
  return gamePlay(description, generatorQuestions);
};

export default brainCalc;
