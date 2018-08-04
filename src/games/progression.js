import gamePlay from '../gamePlay';
import { cons, getRandomNumber } from '../utils';

const description = 'What number is missing in this progression?';
const lengthOfProgression = 10;
const generateProgression = (startProgression, stepProgression) => {
  const progression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === 0) {
      progression.push(startProgression);
    }
    progression.push(progression[i] + stepProgression);
  }
  progression[getRandomNumber(0, progression.length - 1)] = '..';
  return progression.join(' ');
};

const generateGameData = () => {
  const startProgression = getRandomNumber(1, 50);
  const stepProgression = getRandomNumber(1, 50);
  const question = generateProgression(startProgression, stepProgression);
  return cons(question, String(stepProgression));
};
const brainProgression = () => gamePlay(description, generateGameData);

export default brainProgression;

// 5 7 9 11 13 .. 17 19 21 23
