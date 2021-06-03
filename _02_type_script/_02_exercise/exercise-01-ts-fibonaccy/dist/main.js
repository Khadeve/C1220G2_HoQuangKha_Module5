function fibonacci(n) {
    if (n === 1 || n === 2)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let sum = 0;
function fibonaccies(m) {
    if (m === 0) {
        return;
    }
    let fiboNumber = fibonacci(m);
    sum += fiboNumber;
    console.log(fiboNumber);
    fibonaccies(--m);
}
fibonaccies(10);
console.log(`The summary of fibonacci numbers: ${sum}`);
//# sourceMappingURL=main.js.map