import readlineSync from 'readline-sync';

const start = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfGamer = readlineSync.question('What is your name? ');
  console.log(`Hi ${nameOfGamer} !`);
  return nameOfGamer;
};
const firstGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const nameOfGamer = readlineSync.question('What is your name? ');
  console.log(`Hi ${nameOfGamer} !`);
  const iter = (count) => {
    if (count === 3) {
      return console.log(`Congratulations, ${nameOfGamer}!`);
    }
    const maxNum = 100;
    const num = Math.floor(Math.random() * maxNum);
    const numEven = num % 2;
    const correctAnswer = (numEven === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your Answer? ');
    if (answer === correctAnswer) {
      console.log('Correct');
      return iter(count + 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return console.log(`Let's try again, ${nameOfGamer}!`);
  };
  const count = 0;
  return iter(count);
};

export { start, firstGame };
