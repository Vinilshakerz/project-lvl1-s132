import { cons } from 'hexlet-pairs';
import { getRandomNum, newGame } from '..';

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const gameParameters = () => {
    const maxNumOper = 3;
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const operation = getRandomNum(maxNumOper) + 1;
    switch (operation) {
      case 1:
        return cons(`${num1} + ${num2}`, String(num1 + num2));
      case 2:
        return cons(`${num1} - ${num2}`, String(num1 - num2));
      case 3:
        return cons(`${num1} * ${num2}`, String(num1 * num2));
      default:
        return 1;
    }
  };
  const game = cons(gameParameters, description);
  return newGame(game);
};
export default brainCalc;
