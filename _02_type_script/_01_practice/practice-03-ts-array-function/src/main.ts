function isPrime(aNumber: number): boolean {
    if (aNumber < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(aNumber); i++) {
        if (aNumber % i === 0) {
            return false;
        }
    }
    return true;
}

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum = 0;

for (let e of array) {
    if (isPrime(e)) {
        sum += e;
    }
}

console.log(`Summary of primes: ${sum}`);

