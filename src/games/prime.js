import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const isPrime = (num) => {
  const possibleDiv = Math.floor(Math.sqrt(num));
  if (num <= 1) {
    return false;
  }
  const iter = (div) => {
    if (div > possibleDiv) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  return iter(2);
};
const makeGameParameters = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, String(correctAnswer));
};
const prime = () => newGame(makeGameParameters, description);
export default prime;
