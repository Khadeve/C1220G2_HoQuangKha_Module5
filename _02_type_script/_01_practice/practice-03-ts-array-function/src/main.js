function isPrime(aNumber) {
    if (aNumber < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(aNumber); i++) {
        if (aNumber % i === 0) {
            return false;
        }
    }
    return true;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var e = array_1[_i];
    if (isPrime(e)) {
        sum += e;
    }
}
console.log("Summary of primes: " + sum);
