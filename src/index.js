import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

/* brain-games API */
const newGame = (game) => {
  const description = cdr(game);
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log();
  const nameOfGamer = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${nameOfGamer} !`);
  console.log();
  const maxCount = 3;
  const iter = (count) => {
    if (count === maxCount) {
      console.log(`Congratulations, ${nameOfGamer}!`);
      return;
    }
    const gameParameters = car(game)();
    const question = car(gameParameters);
    const correctAnswer = cdr(gameParameters);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer? ');
    if (answer === correctAnswer) {
      console.log('Correct');
      iter(count + 1);
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${nameOfGamer}!`);
    }
  };
  const count = 0;
  return iter(count);
};
export default newGame;
