import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Balance the given number.';
const maxNum = 10000;
const additionalDigit = 1;
const getNumLenght = num => String(num).length;
const order = (digit, exp) => digit * (10 ** exp);
const foldNum = (num) => {
  const iter = (numDigit, sum) => {
    if (numDigit === getNumLenght(num)) {
      return sum;
    }
    const digit = Number(String(num)[numDigit]);
    return iter(numDigit + 1, sum + digit);
  };
  return iter(0, 0);
};
const constructNum = (digit, numLenght) => {
  const iter = (acc, exp) => {
    if (exp === numLenght) {
      return acc;
    }
    return iter(acc + order(digit, exp), exp + 1);
  };
  return iter(0, 0);
};
const getMainDigit = num => Math.floor(foldNum(num) / getNumLenght(num));
const getAdditionalDigitLenght = num => foldNum(num) % getNumLenght(num);
const makeBalance = (num) => {
  if (foldNum(num) < getNumLenght(num)) {
    return constructNum(additionalDigit, foldNum(num));
  }
  const mainNum = constructNum(getMainDigit(num), getNumLenght(num));
  const additionalNum = constructNum(additionalDigit, getAdditionalDigitLenght(num));
  return mainNum + additionalNum;
};
const makeGameParameters = () => {
  const question = getRandomNum(maxNum);
  const correctAnswer = String(makeBalance(question));
  return cons(question, correctAnswer);
};
const balance = () => newGame(makeGameParameters, description);
export default balance;
