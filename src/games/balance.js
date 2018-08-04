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
  const numToArray = createArray(String(num));
  let i = 0;
  while (i <= numToArray.length) {
    if (+numToArray[i] > +numToArray[i + 1]) {
      numToArray[i] = decreaceByOne(numToArray[i]);
      numToArray[i + 1] = increaceByOne(numToArray[i + 1]);
      i = 0;
    } else if (+numToArray[i] + 1 < +numToArray[i + 1]) {
      numToArray[i] = increaceByOne(numToArray[i]);
      numToArray[i + 1] = decreaceByOne(numToArray[i + 1]);
      i = 0;
    } else {
      i += 1;
    }
  }
  return numToArray.join('');
};
const generateGameData = () => {
  const num = getRandomNumber(100, 9999);
  const correctAnswer = getBalanceNum(num);
  const question = `${num}`;
  return cons(question, correctAnswer);
};

const brainBalance = () => gamePlay(description, generateGameData);

export default brainBalance;
