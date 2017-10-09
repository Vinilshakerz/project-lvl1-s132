import readlineSync from 'readline-sync';
export const nameOfGamer = readlineSync.question('What is your name? ');
console.log('Hi ' + nameOfGamer + '!');
