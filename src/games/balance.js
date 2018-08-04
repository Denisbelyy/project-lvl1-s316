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
  const numInArray = createArray(String(num));
  for (let i = 0; i < numInArray.length; i += 1) {
    if (+numInArray[i] > +numInArray[i + 1]) {
      numInArray[i] = decreaceByOne(numInArray[i]);
      numInArray[i + 1] = increaceByOne(numInArray[i + 1]);
      return getBalanceNum(numInArray.join(''));
    }
    if (+numInArray[i] + 1 < +numInArray[i + 1]) {
      numInArray[i] = increaceByOne(numInArray[i]);
      numInArray[i + 1] = decreaceByOne(numInArray[i + 1]);
      return getBalanceNum(numInArray.join(''));
    }
  }
  return num;
};
const generateGameData = () => {
  const num = getRandomNumber(100, 9999);
  const correctAnswer = getBalanceNum(num);
  const question = `${num}`;
  return cons(question, correctAnswer);
};

const brainBalance = () => gamePlay(description, generateGameData);

export default brainBalance;
