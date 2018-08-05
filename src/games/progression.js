import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const description = 'What number is missing in this progression?';
const generateProgression = (startElement, step, length, index) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startElement + step * i);
  }
  const currentAnswer = String(progression[index]);
  progression[index] = '..';
  return cons(progression.join(' '), currentAnswer);
};

const generateGameData = () => {
  const startElement = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 50);
  const lengthOfProgression = 10;
  const indexOfNumber = getRandomNumber(0, lengthOfProgression - 1);
  return generateProgression(startElement, step, lengthOfProgression, indexOfNumber);
};
const brainProgression = () => gamePlay(description, generateGameData);

export default brainProgression;
