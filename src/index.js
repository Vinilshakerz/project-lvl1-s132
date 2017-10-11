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
  const maxCount = 3;
  const iter = (count) => {
    if (count === maxCount) {
      return console.log(`Congratulations, ${nameOfGamer}!`);
    }
    const getRandomNum = () => {
      const maxNum = 100;
      const num = Math.floor(Math.random() * maxNum);
      return num;
    };
    const isNumEven = (num) => {
      const numEven = num % 2 === 0;
      return numEven;
    };
    const number = getRandomNum();
    const correctAnswer = isNumEven(number) ? 'yes' : 'no';
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

export { start, firstGame };
