#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const nameOfGamer = readlineSync.question('What is your name? ');
console.log(`Hi ${nameOfGamer} !`);
