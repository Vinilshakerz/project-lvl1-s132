import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const halfNum = num => Math.floor(num / 2) + 1;
const isDivider = (num, div) => num % div === 0;
const isPrime = (num) => {
  if (isDivider(num, 2)) {
    return false;
  }
  const iter = (div) => {
    if (isDivider(num, div)) {
      return false;
    }
    if (div > halfNum(num)) {
      return true;
    }
    return iter(div + 2);
  };
  return iter(3);
};
const makeGameParameters = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};
const prime = () => newGame(makeGameParameters, description);
export default prime;
