import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const findGCD = (num1, num2) => {
  if (num2 > num1) {
    return findGCD(num2, num1);
  }
  const div = num1 % num2;
  if (div === 0) {
    return num2;
  }
  return findGCD(num2, div);
};
const makeGameParameters = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);
  return cons(question, correctAnswer);
};
const gcd = () => newGame(makeGameParameters, description);
export default gcd;
