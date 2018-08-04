import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const description = 'Balance the given number.';

const decreaceByOne = a => Number(a) - 1;
const increaceByOne = a => Number(a) + 1;

const createArray = (str) => {
  const newArray = [];
  for (let i = 0; i < str.length; i += 1) {
    newArray.push(str[i]);
  }
  return newArray;
};

const getBalanceNum = (num) => {
  const iter = (acc, position) => {
    if (position === acc.length) {
      return acc.join('');
    }
    if (+acc[position] > +acc[position + 1]) {
      acc[position] = decreaceByOne(acc[position]);
      acc[position + 1] = increaceByOne(acc[position + 1]);
      return iter(acc, 0);
    }
    if (+acc[position] + 1 < +acc[position + 1]) {
      acc[position] = increaceByOne(acc[position]);
      acc[position + 1] = decreaceByOne(acc[position + 1]);
      return iter(acc, 0);
    }
    return iter(acc, position + 1);
  };
  return iter(createArray(String(num)), 0);
};
const generateGameData = () => {
  const num = getRandomNumber(100, 9999);
  const correctAnswer = getBalanceNum(num);
  const question = `${num}`;
  return cons(question, correctAnswer);
};

const brainBalance = () => gamePlay(description, generateGameData);

export default brainBalance;
