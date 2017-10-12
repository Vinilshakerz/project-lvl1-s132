import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'What is the result of the expression?';
const maxNumOper = 3;
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case 1:
      return cons(`${num1} + ${num2}`, num1 + num2);
    case 2:
      return cons(`${num1} - ${num2}`, num1 - num2);
    case 3:
      return cons(`${num1} * ${num2}`, num1 * num2);
    default:
      return undefined;
  }
};
const makeGameParameters = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operation = getRandomNum(maxNumOper) + 1;
  return calculate(num1, num2, operation);
};
const brainCalc = () => newGame(makeGameParameters, description);
export default brainCalc;
