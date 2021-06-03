// Calculate sum of the first 30 prime numbers.
let sum = 2;
let prime = 3;
let count = 1;
while (count < 30) {
    var check = true;
    // loop for check prime number
    for (let i = 3; i <= Math.sqrt(prime); i += 2) {
        if (prime % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        sum += prime;
        ++count;
    }
    prime += 2;
}

console.log(`Sum of the first 30 primes: ${sum}`);
