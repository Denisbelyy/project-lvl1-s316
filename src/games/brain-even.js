import getRandomNumber from '../random-number';
import gamePlay from '../gamePlay';
import { cons } from '../brain-pairs';

const isEven = number => number % 2 === 0;

const brainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const generatorQuestions = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  return gamePlay(description, generatorQuestions);
};

export default brainEven;
