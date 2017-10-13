import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'Balance the given number.';
const maxNum = 10000;
const additionalDigit = 1;
const numLenght = num => String(num).length;
const exponentOfTen = exp => 10 ** exp;
const order = (digit, exp) => digit * exponentOfTen(exp);
/* Cложения цифр числа */
const foldNum = (num) => {
  /* numDigit - порядковый номер символа , sum - сумма цифр */
  const iter = (numDigit, sum) => {
    if (numDigit === numLenght(num)) {
      return sum;
    }
    const digit = Number(String(num)[numDigit]);
    return iter(numDigit + 1, sum + digit);
  };
  return iter(0, 0);
};
/* Строит число с длиной символов numLength из цифр digit (по умолчанию цифра 1) */
const constructNum = (digit, numberLenght) => {
  const iter = (acc, exp) => {
    if (exp === numberLenght) {
      return acc;
    }
    return iter(acc + order(digit, exp), exp + 1);
  };
  return iter(0, 0);
};
/* mainDigit вычисляет цифру из которой строится число без учета
дополнительных единиц. */
const mainDigit = num => Math.floor(foldNum(num) / numLenght(num));
/* additionalDigitLenght количество оставшихся единиц  */
const additionalDigitLenght = num => foldNum(num) % numLenght(num);
const makeBalance = (num) => {
  if (foldNum(num) < numLenght(num)) {
    return constructNum(additionalDigit, foldNum(num));
  }
  const mainNum = constructNum(mainDigit(num), numLenght(num));
  const additionalNum = constructNum(additionalDigit, additionalDigitLenght(num));
  return mainNum + additionalNum;
};
const makeGameParameters = () => {
  const question = getRandomNum(maxNum);
  const correctAnswer = String(makeBalance(question));
  return cons(question, correctAnswer);
};
const balance = () => newGame(makeGameParameters, description);
export default balance;
