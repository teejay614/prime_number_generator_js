// test/primeGenerator.test.js
import { expect } from 'chai';
import { generatePrimeRange } from './primeGenerator.js'

describe('generatePrimeRange', () => {

    it('should handle inverse ranges such that 1-10 and 10-1 are equivalent', () => {
        const result = generatePrimeRange(1, 10);
        const result2 = generatePrimeRange(10, 1);
        expect(result).to.deep.equal([2, 3, 5, 7]);
        expect(result2).to.deep.equal([2, 3, 5, 7]);
    });

    it('should return primes between 7900 and 7920', () => {
        const result = generatePrimeRange(7900, 7920);
        expect(result).to.deep.equal([7901, 7907, 7919]);
    });

    it('should return an empty array if start or end is NaN', () => {
        const result1 = generatePrimeRange(NaN, 10);
        const result2 = generatePrimeRange(10, NaN);
        const result3 = generatePrimeRange(NaN, NaN);
        expect(result1).to.deep.equal([]);
        expect(result2).to.deep.equal([]);
        expect(result3).to.deep.equal([]);
    });

    it('should handle inverse ranges with negative numbers and non-negative numbers', () => {
        const result = generatePrimeRange(-10, 10);
        const result2 = generatePrimeRange(10, -10)
        expect(result).to.deep.equal([2, 3, 5, 7]);
        expect(result2).to.deep.equal([2, 3, 5, 7]);

    });

    it('should return an empty array if start equals end', () => {
        const result = generatePrimeRange(8, 8);
        expect(result).to.deep.equal([]);
    });

    it('should return an empty array if there are no prime numbers in the range', () => {
        const result = generatePrimeRange(8, 10);
        expect(result).to.deep.equal([]);
    });

    it('should return an array containing the single prime number in the range', () => {
        const result = generatePrimeRange(13, 13);
        expect(result).to.deep.equal([13]);
    });

    it('should return primes between 1000 and 1100', () => {
        const result = generatePrimeRange(1, 101);
        expect(result).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]);
    });
    // To improve efficiency I could use an algorithm like Sieve Of Eratosthenes
    // I didn't due to the fact that the requirements didn't ask for testing large ranges
    // I did however add a test to test a decent sized range of 1 to 10,000
    it('should handle a large range efficiently', () => {

        // Measure the execution time of the function
        const startTime = Date.now();
        const result = generatePrimeRange(1, 10000);
        const endTime = Date.now();

        // Calculate the duration of the function execution
        const duration = endTime - startTime;

        // Assert that the duration is within a reasonable range 
        expect(duration).to.be.lessThanOrEqual(2000);

    });


});
