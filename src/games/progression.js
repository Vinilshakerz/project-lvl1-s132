import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'What number is missing in this progression?';
const progressionLength = 10;
const getProgression = (num) => {
  const unknownNumPlace = getRandomNum(progressionLength);
  const progressionStep = getRandomNum();
  const iter = (acc, current, element) => {
    if (current === progressionLength) {
      return acc;
    }
    if (current < unknownNumPlace) {
      const unit = element - progressionStep;
      return iter(`${unit} ${acc}`, current + 1, unit);
    } else if (current === unknownNumPlace) {
      return iter(acc, current + 1, num);
    }
    const unit = Number(element) + Number(progressionStep);
    return iter(`${acc} ${unit}`, current + 1, unit);
  };
  return iter(' .. ', 1, num);
};
const makeGameParameters = () => {
  const correctAnswer = String(getRandomNum());
  const question = getProgression(correctAnswer);
  return cons(question, correctAnswer);
};
const balance = () => newGame(makeGameParameters, description);
export default balance;
