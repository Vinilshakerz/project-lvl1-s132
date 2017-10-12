import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

/* brain-games API */
const newGame = (game) => {
  const description = cdr(game);
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const nameOfGamer = readlineSync.question('What is your name? ');
  console.log(`Hi ${nameOfGamer} !`);
  console.log();
  const maxCount = 3;
  const iter = (count) => {
    if (count === maxCount) {
      return console.log(`Congratulations, ${nameOfGamer}!`);
    }
    const gameParameters = car(game)();
    const number = car(gameParameters);
    const correctAnswer = cdr(gameParameters);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your Answer? ');
    if (answer === correctAnswer) {
      console.log('Correct');
      return iter(count + 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${nameOfGamer}!`);
    return undefined;
  };
  const count = 0;
  return iter(count);
};
export { start, newGame };
