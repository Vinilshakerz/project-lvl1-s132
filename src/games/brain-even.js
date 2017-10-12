import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isNumEven = num => num % 2 === 0;
const makeGameParameters = () => {
  const question = getRandomNum();
  const correctAnswer = isNumEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};
const brainEven = () => newGame(makeGameParameters, description);
export default brainEven;
