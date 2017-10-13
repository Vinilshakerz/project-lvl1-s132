import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'What number is missing in this progression?';
const progressionLength = 10;
const unknownNumPlace = getRandomNum(progressionLength);
const progressionStep = getRandomNum();
const getProgression = (num) => {
  const iter = (progression, acc, element) => {
    if (acc === progressionLength) {
      return progression;
    }
    if (acc < unknownNumPlace) {
      const unit = element - progressionStep;
      return iter(`${unit} ${progression}`, acc + 1, unit);
    } else if (acc === unknownNumPlace) {
      return iter(progression, acc + 1, num);
    }
    const unit = Number(element) + Number(progressionStep);
    return iter(`${progression} ${unit}`, acc + 1, unit);
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
