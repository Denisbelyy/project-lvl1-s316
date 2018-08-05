import gamePlay from '../gamePlay';
import {
  cons,
  car,
  cdr,
  getRandomNumber,
} from '../utils';

const description = 'What number is missing in this progression?';
const lengthOfProgression = 10;
const generateProgression = (startElement, step) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    progression.push(startElement + step * i);
  }
  const indexOfNumber = getRandomNumber(0, progression.length - 1);
  const currentAnswer = progression[indexOfNumber];
  progression[indexOfNumber] = '..';
  return cons(progression.join(' '), currentAnswer);
};

const generateGameData = () => {
  const startElement = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 50);
  const progressionData = generateProgression(startElement, step);
  const question = car(progressionData);
  const correctAnswer = cdr(progressionData);
  return cons(question, String(correctAnswer));
};
const brainProgression = () => gamePlay(description, generateGameData);

export default brainProgression;
