// Calculate sum of the first 30 prime numbers.
var sum = 2;
var prime = 3;
var count = 1;
while (count < 30) {
    var check = true;
    // loop for check prime number
    for (var i = 3; i <= Math.sqrt(prime); i += 2) {
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
console.log("Sum of the first 30 primes: " + sum);
