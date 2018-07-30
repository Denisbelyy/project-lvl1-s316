import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('test');
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello! ${userName} :)\n`);
};

export default greeting;
