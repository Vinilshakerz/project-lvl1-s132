import { cons } from 'hexlet-pairs';
import { getRandomNum, newGame } from '..';

const brainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const gameParameters = () => {
    const question = getRandomNum();
    const isNumEven = (num) => {
      const numEven = num % 2 === 0;
      return numEven;
    };
    const correctAnswer = isNumEven(question) ? 'yes' : 'no';
    return cons(question, correctAnswer);
  };
  const game = cons(gameParameters, description);
  return newGame(game);
};
export default brainEven;
