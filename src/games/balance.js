import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Balance the given number.';
const maxNum = 10000;
const additionalDigit = 1;
const getNumLenght = num => String(num).length;
const getExponentOfTen = exp => 10 ** exp;
const order = (digit, exp) => digit * getExponentOfTen(exp);
/* Cложения цифр числа */
const foldNum = (num) => {
  /* numDigit - порядковый номер символа , sum - сумма цифр */
  const iter = (numDigit, sum) => {
    if (numDigit === getNumLenght(num)) {
      return sum;
    }
    const digit = Number(String(num)[numDigit]);
    return iter(numDigit + 1, sum + digit);
  };
  return iter(0, 0);
};
/* Строит число с длиной символов numLength из цифр digit (по умолчанию цифра 1) */
const constructNum = (digit, numLenght) => {
  const iter = (acc, exp) => {
    if (exp === numLenght) {
      return acc;
    }
    return iter(acc + order(digit, exp), exp + 1);
  };
  return iter(0, 0);
};
/* mainDigit вычисляет цифру из которой строится число без учета
дополнительных единиц. */
const getMainDigit = num => Math.floor(foldNum(num) / getNumLenght(num));
/* additionalDigitLenght количество оставшихся единиц  */
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
