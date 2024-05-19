import { createInterface } from 'readline';
import {generatePrimeRange} from './primeGenerator.js'

//sets const readLine to a function that creates an instance of Readline with the specified input and output streams.
const readLine = createInterface({
  input: process.stdin, // This represents the standard input stream. It is a readable stream from which the program can read user input.
  output: process.stdout // This represents the standard output stream. It is a writable stream to which the program can write output.
});

readLine.question('Enter the first number: ', (start) => {
  readLine.question('Enter the second number: ', (end) => {
    // Convert the inputs to numbers
    start = parseFloat(start);
    end = parseFloat(end);
    console.log(generatePrimeRange(start,end));
    readLine.close();
  });
});