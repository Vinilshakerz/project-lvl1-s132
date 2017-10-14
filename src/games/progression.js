import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import newGame from '..';

const description = 'What number is missing in this progression?';
const progressionLength = 10;
const getProgression = (startProgression, progressionStep, answerPos) => {
  const iter = (acc, current, element) => {
    if (current === progressionLength) {
      return cons(acc, String(element));
    }
    const unit = startProgression + (progressionStep * current);
    if (current === answerPos) {
      return iter(`${acc} .. `, current + 1, unit);
    }
    return iter(`${acc + unit} `, current + 1, element);
  };
  return iter('', 0, 0);
};
const makeGameParameters = () => {
  const startProgression = getRandomNum();
  const answerPos = getRandomNum(progressionLength);
  const progressionStep = getRandomNum();
  return getProgression(startProgression, progressionStep, answerPos);
};
const balance = () => newGame(makeGameParameters, description);
export default balance;
