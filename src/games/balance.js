import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Balance the given number.';
const maxNum = 10000;
const additionalDigit = 1;
const getNumLenght = num => String(num).length;
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
    return iter(acc + (digit * (10 ** exp)), exp + 1);
  };
  return iter(0, 0);
};
const makeBalance = (num) => {
  if (foldNum(num) < getNumLenght(num)) {
    return constructNum(additionalDigit, foldNum(num));
  }
  const MainDigit = Math.floor(foldNum(num) / getNumLenght(num));
  const mainNum = constructNum(MainDigit, getNumLenght(num));
  const AdditionalDigitLenght = foldNum(num) - foldNum(mainNum);
  const additionalNum = constructNum(additionalDigit, AdditionalDigitLenght);
  return mainNum + additionalNum;
};
const makeGameParameters = () => {
  const question = getRandomNum(maxNum);
  const correctAnswer = String(makeBalance(question));
  return cons(question, correctAnswer);
};
const balance = () => newGame(makeGameParameters, description);
export default balance;
