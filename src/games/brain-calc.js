import getRandomNumber from '../random-number';
import gamePlay from '../gamePlay';
import { cons } from '../brain-pairs';

const getSum = (a, b) => a + b;

const getSubstraction = (a, b) => a - b;

const getMulti = (a, b) => a * b;

const mathOperation = (a, b, operator) => {
  if (operator === '+') {
    return getSum(a, b);
  }
  if (operator === '-') {
    return getSubstraction(a, b);
  }
  if (operator === '*') {
    return getMulti(a, b);
  }
  return console.log('error! undefined operator');
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
