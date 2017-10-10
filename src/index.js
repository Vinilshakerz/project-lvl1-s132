import readlineSync from 'readline-sync';
const start = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfGamer = readlineSync.question('What is your name? ');
  console.log(`Hi ${nameOfGamer} !`);
};
export default start;
