# prime_number_generator_js
Prime Number Generator using JavaScript

Requirements:
A small main program to drive the prime number generator allowing the user to
specify the number range via the command line.
-The code should handle inverse ranges such that 1-10 and 10-1 are equivalent.

-Ensure a test exists for the range 7900 and 7920 (valid primes are 7901, 7907, 7919).


Prime Number Definition (from Wikipedia):
In mathematics, a prime number is a natural number which has exactly two distinct natural number divisors: 1 and itself. The first twenty-six prime numbers are:
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101

Test Framework is Mocha w/ chai assertions

Mocha: Defines the test suite and test cases using functions like describe and it.

Chai: Within each test case, assertions are made using Chai's expect interface, along with various chaining methods like to.deep.equal to perform the actual test assertions.

Requirements to run:
1. Clone repository 
2. install node.js
3. run `npm install` in root directory
4. run program in terminal manually `node main.js`
5. run the tests in terminal `npm test primeRange.test.js`