// This is less efficient but easier to go through and read for me.
// This function goes through every number and sees if it is divisible by i starting at 2
// if it is divisible by one of the numbers less than n then it returns false
// if it doesn't find a value divisible by i then the number is prime.
// To improve efficiency I could use an algorithm like Sieve Of Eratosthenes
// I didn't due to the fact that the requirements didn't ask for testing large ranges
function isPrime(n)  
{  
    // easy elimination 1 and any value less than 1 is not prime
    if (n <= 1) return false;  
  
    for (let i = 2; i < n; i++)  
        if (n % i == 0)  
            return false;  
    return true;  
}  

export function generatePrimeRange(start, end) {
    if (start > end) {
        [start, end] = [end, start]; // Swap start and end
    }

    let range = [];
    for (let i = start; i <= end; i++) {
        // Go through start to finish and run isPrime for each value from start to end.
        if (isPrime(i)) {
            range.push(i);
        }
    }

    return range;
}
